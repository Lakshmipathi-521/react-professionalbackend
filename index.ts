import { Customer } from "./models";
import { LogManager } from "./common";

class MainClass
{
    static main(): void{
        
        const customer = new Customer(1, "North Winf", "Banglore",
            "123@gmail.com", "2424234", "SILVER", 12000, true, "Remarks");
        LogManager.info(customer.toString());
    }
}

MainClass.main();