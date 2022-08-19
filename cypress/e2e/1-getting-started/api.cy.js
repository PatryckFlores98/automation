/// <reference types="cypress" />


describe('API PET', () => {
  it('add a new pet', () => {
    cy.request({
      method: 'POST',
      url: 'https://petstore3.swagger.io/api/v3/pet',
      body: {
        
          "id": 10,
          "name": "doggie",
          "category": {
            "id": 1,
            "name": "Dogs"
          },
          "photoUrls": [
            "string"
          ],
          "tags": [
            {
              "id": 0,
              "name": "string"
            }
          ],
          "status": "available"
        
      }
    }).then((response) => {
      expect(response.status).to.equal(200);
      
    })
  })



    it('update a pet', () => {
      cy.request({
        method: 'PUT',
        url: 'https://petstore3.swagger.io/api/v3/pet',
        body: {
          
            "id": 10,
            "name": "doggie",
            "category": {
              "id": 1,
              "name": "Dogs"
            },
            "photoUrls": [
              "string"
            ],
            "tags": [
              {
                "id": 0,
                "name": "string"
              }
            ],
            "status": "available"
          
        }
      }).then((response) => {
        expect(response.status).to.equal(200);
        
      })
    })

    

    it('find pet by status', () => {
      cy.request({
        method: 'GET',
        url: 'https://petstore3.swagger.io/api/v3/pet/findByStatus?status=available'
      }).then((response) => {
        expect(response.status).to.equal(200);
        expect(response.body[0].status).to.equal('available')
      })
    })

    it('delete a pet', () => {
      cy.request({
        method: 'DELETE',
        url: 'https://petstore3.swagger.io/api/v3/pet/10'
      }).then((response) => {
        expect(response.status).to.equal(200);
      })
    })
  })