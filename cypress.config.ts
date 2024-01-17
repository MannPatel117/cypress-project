import { defineConfig } from "cypress";
import webpack = require("@cypress/webpack-preprocessor");
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import * as Tedious from 'tedious';
import mysql from 'mysql2';
const browserify = require('@cypress/browserify-preprocessor')



function queryTestDb(query: any, config: any) {
  
  const connection = mysql.createConnection(config.env.dbsql);
  return new Promise((resolve, reject) => {
    connection.connect((error:any) => {
      if (error) {
        console.error('Connection error:', error);
        reject(error);
        return; // Exit early if connection fails
      }

      console.log('Connection successful!');

      connection.query(query, (error:any, results:any) => {
        if (error) {
          console.error('Query error:', error);
          reject(error);
        } else {
          connection.end();
          console.log('Query results:', results);
          resolve(results);
        }
      });
    });
  });
}



function sqlServerDB(sql:any, config:any){
  console.log('SQL SERVER CALLED')
  const connection = new Tedious.Connection(config.env.db);
  return new Promise((resolve, reject) => {
    console.log("trying connection ....")
    connection.connect((err:any)=>{
      if(err){
        console.log("connection error " + err)
        reject(err)
        return;
      }
      console.log("successfull connection")
      const request = new Tedious.Request(sql, function (err:any, rowCount:any, rows:any) {
        console.log(rows)
        return err ? reject(err) : resolve(rows);
      })
      connection.execSql(request);
    });
  });
}

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions
): Promise<Cypress.PluginConfigOptions> {
  
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  await addCucumberPreprocessorPlugin(on, config);
  on('task', { sqlServerr : (sql:any) => {
      return sqlServerDB(sql, config)
    }
  }
  )
  on("task", {
    queryDb: query => {
       return queryTestDb(query, config)
    }
  });
  on('file:preprocessor', browserify())
  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /\.ts$/,
              exclude: [/node_modules/],
              use: [
                {
                  loader: "ts-loader",
                },
              ],
            },
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );
  
  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  taskTimeout:60000,
  
  env : {
    formUrl: "http://devapp.torrentlabcloud.com/questionaire-form?project=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjoyNDYsImlhdCI6MTcwMzEzNTI1NCwiZXhwIjoxNzA1NzI3MjU0fQ.TViOr-Zi0fxExCzcgbnKZlPPAK2ID6r5ArCPhY5rcxU",
    project_3dAgility: "https://3dagilityuat.z13.web.core.windows.net/",
    dbsql : {
      user: "root",
      host: "localhost",
      database: "test",
      password: "@Mann2001",
      port: 3306
  },
  db: {
    server: "mannserver.database.windows.net",
    authentication:{
      type: 'default',
      options:{
        userName: "mannadmin",
        password: "@Mann2001",
      }
    },
    options: {
      database: "Mann Cypress",
      rowCollectionOnRequestCompletion: true,
      encrypt: true,
    }
  }
  },
  e2e: {
    baseUrl: "https://www.google.com/",
    specPattern: "**/*.feature",
    setupNodeEvents,
    supportFile: 'cypress/support/e2e.ts',
    
  },
  
});

