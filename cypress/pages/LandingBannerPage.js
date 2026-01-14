  class LandingBannerPage {

  visit() {
    cy.visit('https://www.gov.il/he/departments/prime_ministers_office/govil-landing-page')
  }
  
 getPlayBtn(){
return cy.get('button[class*="src_play_button"]')
 }
  getBannerItem(){
  return cy.get("#officeBanner li")
 }
  getImgDesktop(){
  return cy.get('div[class*="src_img_desktop"] img')
 }
  getImgMobile(){
  return cy.get('div[class*="src_img_mobile"] img')
 }
}

export default new LandingBannerPage()

   