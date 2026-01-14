import LandingBannerPage from "../pages/LandingBannerPage";

describe("Main Banner Test", () => {
  it("should replace main banner with data from another page and verify items", () => {
    
    cy.request(
      "GET",
      "https://www.gov.il/govil-landing-page-api/he/api/offices/get/ministry_of_public_security"

    ).then((res) => {
      const mainBannerData = res.body.mainBanner;

      cy.intercept(
        "GET",
        "https://www.gov.il/govil-landing-page-api/he/api/offices/get/prime_ministers_office",
        
        (req) => {
          req.continue((res) => {
            res.body.mainBanner = mainBannerData;
          });
        }
      ).as("mainBanner");


  LandingBannerPage.visit()
      cy.wait("@mainBanner");

    
   LandingBannerPage.getPlayBtn().click();

      const firstItem = mainBannerData.bannerItems[0];

 
      LandingBannerPage.getBannerItem()
        .eq(0)
        .within(() => {
          cy.get("a")
            .should("have.attr", "href", firstItem.link.url)
            .and("have.attr", "id", firstItem.link.id);

          LandingBannerPage.getImgDesktop()
            .should("have.attr", "src", firstItem.imgDesktop.src)
            .and("have.attr", "alt", firstItem.imgDesktop.alt);

          LandingBannerPage.getImgMobile()
            .should("have.attr", "data-src", firstItem.imgMobile.src)
            .and("have.attr", "alt", firstItem.imgMobile.alt);
        });
    });
  });
});