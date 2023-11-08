import { JumboCookiePage } from './pages/jumbo.cookie.page';
import { expect, request } from "@playwright/test";
export async function Rejectcookies(page) {
    // Go to the starting url before each test.
    await page.goto('https://www.jumbo.com/')
    const jumboCookiePage = new JumboCookiePage(page);
    await jumboCookiePage.rejectAllCookies();
}

export class GraphQLService {

    async GetBasket(){
        const api = await request.newContext();
        const query = '{GetBasket($type: BasketType, $calculateSummary: Boolean) { basket(type: $type) { ...Basket ...Error __typename }}fragment Basket on Basket { id type totalProductCount calculateTotals(calculateSummary: $calculateSummary) { ...CalculateResult __typename } lines { id quantity details { ...ProductDetails __typename } __typename } __typename}fragment ProductDetails on Product { id: sku brand category: rootCategory parentCategory subtitle: packSizeDisplay title image link availability { availability isAvailable label status stockLimit __typename } retailSet price { price promoPrice pricePerUnit { price unit __typename } __typename } quantityDetails { maxAmount minAmount stepAmount defaultAmount __typename } promotions { group id tags { text inverse __typename } __typename } nixProduct surcharges { type value { amount currency __typename } __typename } badgeDescription __typename}fragment CalculateResult on CalculateResult { totals { total discount gross itemsDiscount nonItemTotal shippingCosts shippingDiscount itemsDeposit itemsDepositGroups { quantity total description __typename } tax reducedTax fullTax itemTotal itemSubtotal totalToPay deposit { totalDeposit __typename } discounts { items shipping totalDiscounts __typename } taxes { groups { code amount __typename } totalTaxes __typename } surcharges { singleUsePlastic totalSurcharges __typename } __typename } promotions { id label type discount voucherCode __typename } items { requestLineId sku name gross: linePriceExDiscount net: linePriceIncDiscount discount promotions { type: scope discount description voucherCode __typename } surcharges { type value __typename } __typename } mov: minimumOrderValue { pupMinOrderValue: pupMinimumOrderValue hdMinOrderValue: hdMinimumOrderValue addToGetOrderDelivered: hdAdditionalAmountNeeded addToPlaceOrder: pupAdditionalAmountNeeded pupReached hdReached __typename } __typename}fragment Error on Error { reason errorMessage friendlyHeader friendlyMessage __typename}, variables: {calculateSummary: true,type: ECOMMERCE}}';
        const data = {
          query: query
        };
        var url = 'https://www.jumbo.com/api/graphql';
        const response = await api.post(url, {data});
        const status = response.status();
        // const respJson = await response.json();
    
        expect(status).toEqual(200);
    }

    async AddToBasket() {
        const api = await request.newContext();
        const query = '{"query": "mutation addBasketLine($input: AddBasketLineInput!, $calculateSummary: Boolean) { addBasketLine(input: $input) { ...Basket ...Error __typename }}fragment Basket on Basket { id type totalProductCount calculateTotals(calculateSummary: $calculateSummary) { ...CalculateResult __typename } lines { id quantity details { ...ProductDetails __typename } __typename } __typename}fragment ProductDetails on Product { id: sku brand category: rootCategory parentCategory subtitle: packSizeDisplay title image link availability { availability isAvailable label status stockLimit __typename } retailSet price { price promoPrice pricePerUnit { price unit __typename } __typename } quantityDetails { maxAmount minAmount stepAmount defaultAmount __typename } promotions { group id tags { text inverse __typename } __typename } nixProduct surcharges { type value { amount currency __typename } __typename } badgeDescription __typename}fragment CalculateResult on CalculateResult { totals { total discount gross itemsDiscount nonItemTotal shippingCosts shippingDiscount itemsDeposit itemsDepositGroups { quantity total description __typename } tax reducedTax fullTax itemTotal itemSubtotal totalToPay deposit { totalDeposit __typename } discounts { items shipping totalDiscounts __typename } taxes { groups { code amount __typename } totalTaxes __typename } surcharges { singleUsePlastic totalSurcharges __typename } __typename } promotions { id label type discount voucherCode __typename } items { requestLineId sku name gross: linePriceExDiscount net: linePriceIncDiscount discount promotions { type: scope discount description voucherCode __typename } surcharges { type value __typename } __typename } mov: minimumOrderValue { pupMinOrderValue: pupMinimumOrderValue hdMinOrderValue: hdMinimumOrderValue addToGetOrderDelivered: hdAdditionalAmountNeeded addToPlaceOrder: pupAdditionalAmountNeeded pupReached hdReached __typename } __typename}fragment Error on Error { reason errorMessage friendlyHeader friendlyMessage __typename}" }';
        const data = {
          query: query
        };
    
        // const response = await api.post(URL, {data});
        // const status = response.status();
        // const respJson = await response.json();
    
        expect(status).toEqual(200);
      };
     
}

