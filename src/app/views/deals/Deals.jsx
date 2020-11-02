import React from "react";
import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  IconButton,
  Icon,
  TableRow
} from "@material-ui/core";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { useHistory } from "react-router-dom";
import { Breadcrumb } from "matx";

const subscribarList = [
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  },
  {
    "Deal Number": 123456,
    "Deal Name": "",
    "Status": ["submitted", "available", "bought", "made offer", "no interest"],
    "Buyer Name":"John Doe" ,
    "Vendor":["Target"] ,
    "Approver":  ["Jack Doe"],
    "Created Date":"" ,
    "Bid Deadline": "",
    "Vendor Source": ["Target.com"],
    "Source Reason": ["Excess Inventory"],
    "Resolution": ["NA"],
    "Resolution Date": "",
    "Bid Information": {
      "Basis Type": ["MSRP"],
      "Bid %": 0,
      "Bid $": 0,
      "Transportation $":0 ,
      "Units":0 ,
      "AUR":0 ,
      "Deposit Amount":0 ,
      "Basis Amount $": 0,
      "Purchase Unit":["Pieces"] ,
      "Calculation Method":["% of Basis", "Bid $ amount"] ,
      "Currency":  ["USD", "INR"]
    },
    "Deal Factors": {
      "Merch Condition":  [
        "good",
        "near perfect",
        "open stock",
        "perfect",
        "seconds",
        "varying degrees",
      ],
      "Damage Type": ["None"],
      "Item Visibility": ["100%", "70%", "40%"],
      "Item Similarity": ["All long quality"],
      "Pricing Availability": ["Vendor provided API"],
      "Pricing Methods": ["Multiple Price Points", "Single Price Points", "% off"],
      "Tags":  ["Strikethrough Barcode"],
      "Sticker Label": ["remove 100%"],
      "Seasonal %": ["25%", "50%"],
      "FOB Point": ["Tyler Tx"]
    },
    "Performance Proxy 1": {
      "Proxy Type": ["Comp Source"],
      "Vendor": ["target", "source"],
      "Vendor Source": ["Target.com"],
      "Deal Name":["TGT.com Oct 2019"] ,
      "Deal Proxy":  ["NA"],
      "Avg Discount":60 ,
      "Deal Number": "NA",
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    },
    "Performance Proxy 2": {
      "Proxy Type":["Comp Deal"] ,
      "Vendor": ["target"],
      "Vendor Source": ["Target.com"],
      "Deal Name":  ["TGT.com Sept 2019"],
      "Deal Proxy": ["NA"],
      "Avg Discount": 60,
      "Deal Number": ["23456"],
      "Est ASP $": 20,
      "All in Shrink %": 29,
      "Vendor Shrink %": 15,
      "Internal Shrink %": 25,
      "Net ASP $": 14,
      "COGS/Unit": 6,
      "Est OPEX/Unit": 1.05,
      "Est GM $/Unit": 7.15
    }
  }
];

const Deals = () => {
  const history = useHistory();

  function showDetails(item){
    history.push("/deals/details");
    console.log(item)
  }
  function showVendor(cell, row) {
    return cell[0];
  }
  function  showStatus(cell, row) {
    return cell[0];

  }
  function  showUnits(cell, row) {
    return cell["Units"];

  }
  function showBids(cell, row) {
    return cell["Bid %"];

  }
  const options = {
    page: 1,  // which page you want to show as default
    sizePerPageList: [ {
      text: '5', value: 5
    }, {
      text: '10', value: 10
    }, {
      text: 'All', value: subscribarList.length
    } ], // you can change the dropdown list for size per page
    sizePerPage: 5,  // which size per page you want to locate as default
    pageStartIndex: 0, // where to start counting the pages
    paginationSize: 3,  // the pagination bar size.
    prePage: 'Prev', // Previous page button text
    nextPage: 'Next', // Next page button text
    firstPage: 'First', // First page button text
    lastPage: 'Last', // Last page button text
    // // paginationShowsTotal: this.renderShowsTotal,  // Accept bool or function
    paginationPosition: 'bottom'  // default is bottom, top and both is all available
    // hideSizePerPage: true > You can hide the dropdown for sizePerPage
    // alwaysShowAllBtns: true // Always show next and previous button
    // withFirstAndLast: false > Hide the going to First and Last page button
  };
  return (
    <div className="w-100 overflow-auto">
        <Breadcrumb
          routeSegments={[
            { name: "Deals", path: "/deals" },
          ]}
        />
      <BootstrapTable data={ subscribarList } pagination={true} options={ options }>
          <TableHeaderColumn dataField='Deal Number' isKey={ true } filter={ { type: 'TextFilter', delay: 700 } }>Deal Number</TableHeaderColumn>
          <TableHeaderColumn dataField='Buyer Name'  filter={ { type: 'TextFilter', delay: 700 } }>Buyer Name</TableHeaderColumn>
           <TableHeaderColumn dataField='Status' dataFormat={showStatus} filter={ { type: 'TextFilter', delay: 700 } }>Status</TableHeaderColumn>
             <TableHeaderColumn dataField='Vendor' dataFormat={showVendor} filter={ { type: 'TextFilter', delay: 700 } }>Vendor</TableHeaderColumn>
             <TableHeaderColumn dataField='Bid Information' dataFormat={showBids} filter={ { type: 'TextFilter', delay: 700 } }>Bid %</TableHeaderColumn>
             <TableHeaderColumn dataField='Bid Information' dataFormat={showUnits} filter={ { type: 'TextFilter', delay: 700 } }>Units</TableHeaderColumn>
      </BootstrapTable>
    </div>
  );
};

export default Deals;
