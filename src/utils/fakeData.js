
import houseIcon from "../../Assets/icon/house.png";
import officeIcon from "../../Assets/icon/office-building.png";
import shoppingMallIcon from "../../Assets/icon/boutique.png";
import bachelorIcon from "../../Assets/icon/male.png";
import parkingIcon from "../../Assets/icon/repair-shop.png";
import commercialIcon from "../../Assets/icon/industry.png";
import othersIcon from "../../Assets/icon/other.png";

export const freePostData = [
    {
        _id: 1,
        icon: houseIcon,
        title: "বাড়িওয়ালা",
        subTitle: "আমি বাসা ভাড়া দিতে চাই",
        link: 'Landlord',
    },
    {
        _id: 2,
        icon: bachelorIcon,
        title: "ভাড়াটিয়া",
        subTitle: "আমি বাসা খুঁজছি"
    },
    {
        _id: 3,
        icon: shoppingMallIcon,
        title: "দোকান ভাড়া",
        subTitle: "দোকান,শপিং মল,ব্যাবসায়িক স্পেস"
    },
    {
        _id: 4,
        icon: officeIcon,
        title: "অফিস",
        subTitle: "অফিস স্পেস,অফিস শেয়ারিং"
    },
    {
        _id: 5,
        icon: parkingIcon,
        title: "গ্যারেজ",
        subTitle: "মটর যার এর জন্য গ্যারেজ"
    },
    {
        _id: 6,
        icon: commercialIcon,
        title: "কমার্শিয়াল স্পেস",
        subTitle: "মিল কারখানা,ফ্যাক্টরি ভাড়া"
    },
    {
        _id: 7,
        icon: othersIcon,
        title: "অন্যান্য ভাড়া",
        subTitle: "যেকোন ধরণের স্পেস ভাড়া"
    },
]

export const propertyType = [
    "Flat Rent",
    "Seat Rent",
    "Sublet Rent",
]


export const lookingFor = [
    {
      label: "Bachelor",
      value: "Bachelor",
    },
    {
      label: "Family",
      value: "Family",
    },
    {
      label: "Small Family",
      value: "Small Family",
    },
    {
      label: "Only Male Student",
      value: "Only Male Student",
    },
    {
      label: "Only Female Student",
      value: "Only Female Student",
    },
    {
      label: "Working Man",
      value: "Working Man",
    },
    {
      label: "Working Woman",
      value: "Working Woman",
    },
  ];