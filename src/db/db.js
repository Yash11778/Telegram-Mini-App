import TVImg from "../Images/TV.png";
import Iphoneimg from "../Images/Iphone.png";
import WashingMachineimg from "../Images/Washing Machine.png";
import Fridgeimg from "../Images/Fridge.png";
import MacBookimg from "../Images/MacBook.png";
import Iwatchimg from "../Images/Iwatch.png";
import DSLRimg from "../Images/DSLR.png";

export function getData(){
    return [ 
        { title : "Television", price : 500.00 , Image : TVImg,id:1},
        { title : "Iphone 14 Pro", price : 720.00 , Image : Iphoneimg,id:2},
        { title : "Washing Machine", price : 410.00 , Image : WashingMachineimg,id:3},
        { title : "Refrigerator", price : 450.00 , Image : Fridgeimg,id:4},
        { title : "MacBook", price : 900.00 , Image : MacBookimg,id:5},
        { title : "Iwatch-Midnight", price : 615.00 , Image : Iwatchimg,id:6},
        { title : "DSLR Camera", price : 1100.00 , Image : DSLRimg ,id:7},
    ];
}