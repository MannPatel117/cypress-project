import {Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import csv from 'neat-csv';
import Papa from 'papaparse';
let productName:any
    context('window', ()=>{
        it('Login by entering token',()=>{
            cy.loginAPI().then(function(){
                cy.visit("https://rahulshettyacademy.com/client/",
                {
                    onBeforeLoad : function(window)
                    {
                        window.localStorage.setItem('token', Cypress.env('token'))
                    }
                })
            })
            cy.get(".card-body b").eq(1).then(function(ele){
                productName =  ele.text();
             })
            cy.get(".card button:last-of-type").eq(1).click()
            cy.get("button[routerlink*='cart']").click()
            cy.get(".subtotal button").click()
            cy.get("input[placeholder*='Country']").type("ind")
            cy.get(".ta-results button").each(($e,index,$list)=>{
                const country:any = $e.text()
                if(country === " India"){
                    cy.wrap($e).click();
                }
            })
     
            cy.get(".action__submit").click()
            cy.wait(2000)
            cy.contains("CSV").click()
            //this will give the project path
            
            console.log(Cypress.config("fileServerFolder"))
            //read the file
            cy.readFile(Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_zarifansari.csv")
            .then((text:any)=>{
                console.log(text)
                const result:any = Papa.parse(text)
                console.log(result)
                expect(productName).to.equal(result.data[1][2]);
            })
            /*let productName:any;
            const fileName = Cypress.config("fileServerFolder")+"/cypress/downloads/order-invoice_zarifansari.csv"
             cy.task('excelToJsonConverter',fileName).then(function(result:any)
         {
          cy.log(result.data[1].A);
          expect(productName).to.equal(result.data[1].B);
        })
        cy.readFile(fileName).then(function(text)
        {
          expect(text).to.include("dsaf");
        })*/
     
     
     
        })
    })
    