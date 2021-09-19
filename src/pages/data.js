import PersonIcon from "@material-ui/icons/Person";

export const UserItems = [
    {
      id:1,
      title: 'Request Medical PA',
      icon: <PersonIcon />,
      path: "/medical-pa"
    },
    {
      id:2,
      title: 'View Auth Medical test',
      icon: <PersonIcon />
    }
  ];

  export const AdminItems = [
    {
      id:1,
      title: 'Request Medical PA',
      icon: <PersonIcon />
    },
    {
      id:2,
      title: 'View Auth Medical test',
      icon: <PersonIcon />
    },
  ];

  export const RoleItems = [
    {
      id:1,
      title: 'Request Pharmacy PA',
      icon: <PersonIcon />
    },
    {
      id:2,
      title: 'View Authorizations Pharmacy',
      icon: <PersonIcon />
    },
  ];

  export const headCells = [
      { id: '1', numeric: false, disablePadding: true, label: 'ACTION' },
      { id: '2', numeric: true, disablePadding: false, label: 'FIRST NAME' },
      { id: '3', numeric: true, disablePadding: false, label: 'LAST NAME' },
      { id: '4', numeric: true, disablePadding: false, label: 'DATE OF BIRTH' },
      { id: '5', numeric: true, disablePadding: false, label: 'MEMBER ID' },
      { id: '6', numeric: true, disablePadding: false, label: 'ADDRESS'},
      { id: '7', numeric: true, disablePadding: false, label: 'STATUS' },
      { id: '8', numeric: true, disablePadding: false, label: 'EFFECTIVE DATE' },
      { id: '9', numeric: true, disablePadding: false, label: 'TERM DATE' },
      { id: '10', numeric: true, disablePadding: false, label: 'COMPANY' },
      { id: '11', numeric: true, disablePadding: false, label: 'LINE OF BUSINESS' },
      { id: '12', numeric: true, disablePadding: false, label: 'PLAN CODE' },
      { id: '13', numeric: true, disablePadding: false, label: 'PLAN DESCRIPTION' },
      { id: '14', numeric: true, disablePadding: false, label: 'CONTRACT NUMBER' },
      { id: '15', numeric: true, disablePadding: false, label: 'PBP NUMBER' },
      { id: '16', numeric: true, disablePadding: false, label: 'PCP' },
      { id: '17', numeric: true, disablePadding: false, label: 'PCP NAME' },
      { id: '18', numeric: true, disablePadding: false, label: 'IPA CODE' },
      { id: '19', numeric: true, disablePadding: false, label: 'IPA NAME' }
    
    ];

    export function createData(first_name, last_name, dateof_birth, member_id,address,status,effective_date,
      term_date,company,lineof_business,plan_code,plan_desc,contract_number,pbp_number,pcp,pcp_name,ipa_code,ipa_name) {

      return {first_name, last_name, dateof_birth, member_id, address,status,effective_date,
        term_date,company,lineof_business,plan_code,plan_desc,contract_number,pbp_number,pcp,pcp_name,ipa_code,ipa_name };
    }
    
    export const  rows = [
      createData("Alex","james","16-09-2021",
      "1234","1-25 Guntur","Eligible","18-09-2021","19-09-2021","MHK","UNIFY",4,
      "ADULT BENEFIT","11111111111111","2222222","1203278","Thomas","GPADT01","GPAD02 Group Name"),
      createData("Tom","Jhon","16-09-2021",
      "1234","1-25 Guntur","Eligible","18-09-2021","19-09-2021","MHK","UNIFY",4,
      "ADULT BENEFIT","11111111111111","2222222","1203278","Thomas","GPADT01","GPAD02 Group Name"),
      createData("srikanth","Tony","16-09-2021",
      "1234","1-25 Guntur","Eligible","18-09-2021","19-09-2021","MHK","UNIFY",4,
      "ADULT BENEFIT","11111111111111","2222222","1203278","Thomas","GPADT01","GPAD02 Group Name"),
      createData("sri","Tony","16-09-2021",
      "1237","1-25 Guntur","Eligible","18-09-2021","19-09-2021","MHK","UNIFY",4,
      "ADULT BENEFIT","11111111111111","2222222","1203278","Thomas","GPADT01","GPAD02 Group Name"),
      createData("aryan","Tony","16-09-2021",
      "1217","1-25 Guntur","Eligible","18-09-2021","19-09-2021","MHK","UNIFY",4,
      "ADULT BENEFIT","11111111111111","2222222","1203278","Thomas","GPADT01","GPAD02 Group Name"),
      // createData("Rock","Care","16-09-2021",
      // "1234","1-25 Guntur","Eligible","18-09-2021","19-09-2021","MHK","UNIFY",4,
      // "ADULT BENEFIT","11111111111111","2222222","1203278","Thomas","GPADT01","GPAD02 Group Name"),
      // createData("Test","Case","16-09-2021",
      // "1234","1-25 Guntur","Eligible","18-09-2021","19-09-2021","MHK","UNIFY",4,
      // "ADULT BENEFIT","11111111111111","2222222","1203278","Thomas","GPADT01","GPAD02 Group Name"),
    ];

    export const ServiceheadCells = [
      { id: '1', numeric: false, disablePadding: true, label: 'ACTION' },
      { id: '2', numeric: true, disablePadding: false, label: 'PROVIDER NAME' },
      { id: '3', numeric: true, disablePadding: false, label: 'NPI' },
      { id: '4', numeric: true, disablePadding: false, label: 'DEA ' },
      { id: '5', numeric: true, disablePadding: false, label: 'SPECALITY' },
      { id: '6', numeric: true, disablePadding: false, label: 'ADDRESS'},
      { id: '7', numeric: true, disablePadding: false, label: 'NETWORK ' },
      { id: '8', numeric: true, disablePadding: false, label: 'ADDRESS1' },
      { id: '9', numeric: true, disablePadding: false, label: 'FAX NUMBER' },
      { id: '10', numeric: true, disablePadding: false, label: 'PROVIDER TYPE ' },
      { id: '11', numeric: true, disablePadding: false, label: 'PROVIDER STATUS' },

    
    ]
    export function createDatamain(ACTION, PROVIDER_NAME, NPI, DEA,SPECALITY,ADDRESS1,NETWORK,
      ADDRESS,FAX_NUMBER,PROVIDER_TYPE,PROVIDER_STATUS,) {

      return {ACTION, PROVIDER_NAME, NPI, DEA, SPECALITY,ADDRESS1,NETWORK,
        ADDRESS,FAX_NUMBER,PROVIDER_TYPE,PROVIDER_STATUS, };
    }
    