export const inputFormElements=[
    {
        name:"firstName",textlabel:"Member First Name :", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"lastName",textlabel:"Member Last Name :", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"DateofBirth", type:"date",textlabel:"Date Of Birth :", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    {
        name:"MemberID",type:"number", textlabel:"Member ID :", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:6
    },
    
]


export const inputloginElements=[
    {
        name:"UserName",label:"UserName:", 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:12
    },
    {
        name:"DateofBirth", type:"Password",label:"Password:",placeholder:'Password', 
        variant:"outlined", fullWidth:true,required:true, xs:12,sm:12
    },
   
    
]

export const MedicalFormElements=[
    {
        name:"firstName",textlabel:"Member First Name:", 
        variant:"outlined", fullWidth:true,required:true,
    },
    {
        name:"lastName",textlabel:"Member Last Name:", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"DateofBirth", type:"date",textlabel:" DateofBirth", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"MemberID",type:"number", textlabel:"Member ID", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"firstName",textlabel:"Member First Name:", 
        variant:"outlined", fullWidth:true,required:true,
    },
    {
        name:"lastName",textlabel:"Member Last Name:", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"DateofBirth", type:"date",textlabel:" DateofBirth", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"MemberID",type:"number", textlabel:"Member ID", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"firstName",textlabel:"Member First Name:", 
        variant:"outlined", fullWidth:true,required:true,
    },
    {
        name:"lastName",textlabel:"Member Last Name:", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"DateofBirth", type:"date",textlabel:" DateofBirth", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"MemberID",type:"number", textlabel:"Member ID", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"MemberID",type:"number", textlabel:"Member ID", 
        variant:"outlined", fullWidth:true,required:true,
         type:'dropdown', 
         sublist:[{}]
    }
    
];

export const MedicalFormElements2=[
    {
        name:"firstName",label:"Member First Name:", 
        variant:"outlined", fullWidth:true,required:true,
    },
    {
        name:"lastName",label:"Member Last Name:", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"DateofBirth", type:"date",label:"", 
        variant:"outlined", fullWidth:true,required:true
    },
    
];

export const MedicalFormElements3=[
    {
        name:"firstName",label:"Member First Name:", 
        variant:"outlined", fullWidth:true,required:true,
    },
    {
        name:"lastName",label:"Member Last Name:", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"DateofBirth", type:"date",label:"", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"DateofBirth", type:"date",label:"", 
        variant:"outlined", fullWidth:true,required:true
    }
    
];
export const MenuItems=[
    {
    name:'Action Center',
    code:1,
},
{
    name:' Case management Correspondence',
    code:1,
},

{
    name:' Case management Roster',
    code:1,
},
{
    name:'Claims',
    code:1,
},
{
    name:'Medical/Behavioral Health',
    code:1,
    userdropdown:true
},

{
    name:'Appeals',
    code:1,
},
{
    name:'Correspondenceh',
    code:1,
},
{
    name:'Change Password',
    code:1,
},

]

export const UserMenuItems=[
    {
    name:'Action Center',
    code:1,
   
},
{
    name:' Case management Correspondence',
    code:1,
   
},

{
    name:' Case management Roster',
    code:1,
   
},
{
    name:' Case management Roster',
    code:1,
   },
{
    name:'Eligibility Search',
    code:1,
   
},
{
    name:'Medical/Behavioral Health',
    code:1,
    userdropdown:true,
    value:"admindropdown"
},
{
    name:'   Prior Authorization Pharmacy',
    code:1,
    admindropdown:true,
    value:"userdropdown"
},


{
    name:'Appeals',
    code:1,
   
},
{
    name:'Correspondenceh',
    code:1,
   
},
{
    name:'Change Password',
    code:1,
   
    
},

]

export const MainFormElements=[
    {
        name:"Npi",textlabel:"NPI ID", 
        variant:"outlined", fullWidth:true, required:false
    },
    {
        name:"License",textlabel:"License", 
        variant:"outlined", fullWidth:true, required:false
    },
    {
        name:"Firtname",textlabel:"*First Name", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"LastName",textlabel:"*Last Name", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"Organization",textlabel:"Organization/Facility", 
        variant:"outlined", fullWidth:true,required:false
    },
    {
        name:"street",textlabel:"*Street Address", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"City",textlabel:"*City", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"state",textlabel:"*State", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"Zip",textlabel:"*Zip", 
        variant:"outlined", fullWidth:true,required:true
    },
    
    {
        name:"Phone",textlabel:"*Phone ", 
        variant:"outlined", fullWidth:true,required:true 
    },
    {
        name:"Fax",textlabel:"*Fax", 
        variant:"outlined", fullWidth:true,required:true
        
    },
    {
        name:"Speciality",textlabel:"Speciality", 
        variant:"outlined", fullWidth:false, type:"Dropdown", list:[{name:"value1"}]
    },
    {
        name:"LineOfbussiness",textlabel:"Line OF Bussiness", 
        variant:"outlined", fullWidth:true,required:false,type:"Dropdown", list:[{name:"value1"}]
    },

    {
        name:"Gender",textlabel:"Gender :", 
        variant:"outlined", fullWidth:true,required:false,type:"Dropdown", list:[{name:"M"}]
    },
    {
        name:"Language",textlabel:"Language", 
        variant:"outlined", fullWidth:true,required:false,type:"Dropdown", list:[{name:"telugu"}]
    },
    {
        name:"Fastfaxid",textlabel:"Fast fax ID", 
        variant:"outlined", fullWidth:true,required:false
    },
    
    {
        name:"Dea",textlabel:"*DEA", 
        variant:"outlined", fullWidth:true,required:true
    },
     
    {
        name:"Type",textlabel:"*Type", 
        variant:"outlined", fullWidth:true,required:true,type:"Dropdown", list:[{name:"telugu"}]
    },

    {
        name:"ContanctName",textlabel:"Contact Name", 
        variant:"outlined", fullWidth:true,required:true
    },
    {
        name:"ContanctNo",textlabel:"Contact Number", 
        variant:"outlined", fullWidth:true,required:true
    }

    
];


export const test ={
	"id": "0001",
	   "dropdown":
				[
                    {
                        name:"MemberID",type:"number", textlabel:"Provider", 
                        variant:"outlined", fullWidth:true,required:true,
                         type:'dropdown', 
                         sublist:[{}]
                    },
                    {
                        name:"MemberID",type:"number", textlabel:"Auth ID", 
                        variant:"outlined", fullWidth:true,required:true
                    },
                    {
                        name:"MemberID",type:"number", textlabel:"Speciality", 
                        variant:"outlined", fullWidth:true,required:true
                    },
                    {
                        name:"MemberID",type:"number", textlabel:"Provider Status", 
                        variant:"outlined", fullWidth:true,required:true
                    }
                   
				],

	"topping":
		[
            {
                name:"MemberID",type:"text", textlabel:"First Name", 
                variant:"outlined", fullWidth:true,required:true
            },
            {
                name:"MemberID",type:"text", textlabel:"Last Name", 
                variant:"outlined", fullWidth:true,required:true
            },
            {
                name:"MemberID",type:"text", textlabel:"Organization", 
                variant:"outlined", fullWidth:true,required:true
            }
		],
        "topping1":
		[
            {
                name:"MemberID",type:"text", textlabel:"Address1", 
                variant:"outlined", fullWidth:true,required:true
            },
            {
                name:"MemberID",type:"text", textlabel:"Address2", 
                variant:"outlined", fullWidth:true,required:true
            },
            {
                name:"MemberID",type:"text", textlabel:"City", 
                variant:"outlined", fullWidth:true,required:true
            },
            {
                name:"MemberID",type:"text", textlabel:"State", 
                variant:"outlined", fullWidth:true,required:true
            }
		],
        "topping2":
		[
            {
                name:"MemberID",type:"number", textlabel:"Zip", 
                variant:"outlined", fullWidth:true,required:true
            },
            {
                name:"MemberID",type:"number", textlabel:"Phone Number", 
                variant:"outlined", fullWidth:true,required:true
            },
            {
                name:"MemberID",type:"number", textlabel:"Fax Number", 
                variant:"outlined", fullWidth:true,required:true
            }
		],
        "topping3":
		[
            {
                name:"MemberID",type:"text", textlabel:"Contact Name", 
                variant:"outlined", fullWidth:true,required:true
            },
            {
                name:"MemberID",type:"number", textlabel:"Contact Phone", 
                variant:"outlined", fullWidth:true,required:true
            }
		],
        "radio":
		[
            {
                name:"provider_service",type:"radio", textlabel:"Requesting Servicing Provider", 
                        variant:"outlined", fullWidth:true,required:true,
                         type:'radio', 
                         sublist:[{}]
            },
            {
                name:"request_type",type:"radio", textlabel:"Request Type", 
                        variant:"outlined", fullWidth:true,required:true,
                         type:'dropdown', 
                         sublist:[{}]
            },
            {
                name:"place_of_service",type:"radio", textlabel:"Place of Service", 
                        variant:"outlined", fullWidth:true,required:true,
                         type:'dropdown', 
                         sublist:[{}]
            }
		],

}