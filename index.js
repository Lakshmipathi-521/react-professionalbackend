"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const models_1 = require("./models");
const common_1 = require("./common");
class MainClass {
    static main() {
        const customer = new models_1.Customer(1, "North Winf", "Banglore", "123@gmail.com", "2424234", "SILVER", 12000, true, "Remarks");
        common_1.LogManager.info(customer.toString());
    }
}
MainClass.main();
//# sourceMappingURL=index.js.map