import React, {Component} from 'react';
import {Dialog, DialogContent, DialogTitle, Grid, IconButton, Tooltip, Typography,} from "@mui/material";
import {TextValidator, ValidatorForm} from "react-material-ui-form-validator";
import {withStyles} from "@mui/styles";
import {styleSheet} from "./style";
import CommonButton from "../../components/common/Button";
import HomeIcon from '@mui/icons-material/Home';
import {Link} from "react-router-dom";
import GDSEDataTable from "../../components/common/Table";


class RegisterUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            formData: {
                email: '',
                userName: '',
                password: '',
                name:{
                  firstName:'',
                  lastName:'',
                },
                address:{
                    city:'',
                    street:'',
                    streetNo:'',
                    zipcode:'',
                    geolocation:{
                        lat:'',
                        long:'',
                    }
                },
                phone: '',
            }, verification: null, alert: false, message: '', severity: '',

            updateUser: {},
            isUpdate: false,
            //  for table
            data: [],
            loaded: false,

            //  for data table
            columns: [
                {
                    field: "firstName",
                    headerName: "First Name",
                    width: 175,
                },

                {
                    field: "lastName",
                    headerName: "Last Name",
                    width: 175,
                },

                {
                    field: "email",
                    headerName: "Email",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "userName",
                    headerName: "User Name",
                    width: 175,
                    sortable: false,
                },
                {
                    field: "password",
                    headerName: "password",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "city",
                    headerName: "City",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "Zip Code",
                    headerName: "zipcode",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "mobileNo",
                    headerName: "Mobile No",
                    width: 175,
                    sortable: false,
                },

                {
                    field: "Action",
                    headerName: "Action",
                    width: 175,
                    renderCell: (params) => {
                        return (
                            <>
                                <Tooltip title="Delete">
                                    <IconButton onClick={async () => {
                                      /*  await this.deleteCustomers(params.row.id);*/
                                    }}>
                                       {/* <DeleteIcon className={'text-red-500'}/>*/}
                                    </IconButton>
                                </Tooltip>
                            </>
                        )
                    }
                },
            ],
        }
    }

    handleSubmit = async () => {
        let formData = this.state.formData
        let data = new FormData();
        data.append("customer",JSON.stringify(formData));
        data.append("file",this.state.verification)

/*        let res = await CustomerService.postCustomer(data)
        if (res.status === 201){
            this.setState({
                alert: true,
                message: "Registration Done",
                severity: 'success'
            })
        }else {
            this.setState({
                alert: true,
                message: res.message,
                severity: 'error'
            })
        }*/
    }

    handleFile(e) {
        let verification = e.target.files[0]
        this.setState({
            verification: verification
        })
    }

    handleChange = (event) => {
        let id = event.target.name;
        switch (id) {
            case "email":
                const email = event.target.value;
                this.setState(Object.assign(this.state.formData, {email: email}));
                break;

            case "userName":
                const userName = event.target.value;
                this.setState(Object.assign(this.state.formData, {userName: userName}));
                break;

            case "password":
                const password = event.target.value;
                this.setState(Object.assign(this.state.formData, {password: password}));
                break;

            case "firstName":
                const firstName = event.target.value;
                this.setState(Object.assign(this.state.formData, {firstName: firstName}));
                break;

            case "lastName":
                const lastName = event.target.value;
                this.setState(Object.assign(this.state.formData, {lastName: lastName}));
                break;

            case "city":
                const city = event.target.value;
                this.setState(Object.assign(this.state.formData, {city: city}));
                break;

            case "street":
                const street = event.target.value;
                this.setState(Object.assign(this.state.formData, {street: street}));
                break;

            case "streetNo":
                const streetNo = event.target.value;
                this.setState(Object.assign(this.state.formData, {streetNo: streetNo}));
                break;

            case "zipcode":
                const zipcode = event.target.value;
                this.setState(Object.assign(this.state.formData, {zipcode: zipcode}));
                break;

            case "latValue":
                const latValue = event.target.value;
                this.setState(Object.assign(this.state.formData, {latValue: latValue}));
                break;

            case "longValue":
                const longValue = event.target.value;
                this.setState(Object.assign(this.state.formData, {longValue: longValue}));
                break;

            case "mobileNo":
                const mobileNo = event.target.value;
                this.setState(Object.assign(this.state.formData, {mobileNo: mobileNo}));
                break;


            default:
                break;
        }
    };


    render() {
        const {classes} = this.props;
        return (<>
            <Grid container direction={'row'} justifyContent={'center'} alignContent={'center'}
                  className={'bg-white h-screen'}>
                <Grid container direction={'column'}
                      className={'bg-white w-max rounded-lg shadow-[0px_10px_1px_rgba(221,_221,_221,_1),_0_10px_20px_rgba(204,_204,_204,_1)]'}
                      justifyContent={'center'}>
                    <Grid container direction={"row"} justifyContent={"center"}>
                        <Grid container item xs={12} justifyContent={"center"} className={'pt-20 sm:pt-10'}>
                            <Link to={'/'} className={'pt-20 sm:pt-10'}>
                                <IconButton aria-label="delete" size="large" >
                                    <HomeIcon fontSize="inherit"/>
                                </IconButton>
                            </Link>
                        </Grid>
                        <Grid>
                            <Typography variant={"h4"} textAlign={"center"}>
                                User Registration Form
                            </Typography>
                        </Grid>

                    </Grid>
                    <ValidatorForm
                        onSubmit={this.handleSubmit}
                        onError={(errors) => console.log(errors)}
                        className={"flex justify-center p-10"}
                    >
                        <Grid container item gap={2} xs={12} justifyContent={"center"}>
                            <Grid container direction={'column'} item gap={2} xs={12} sm={5} md={5}>
                                <TextValidator
                                    label="First Name"
                                    onChange={this.handleChange}
                                    name="firstName"
                                    value={this.state.formData.firstName}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Email"
                                    onChange={this.handleChange}
                                    name="email"
                                    value={this.state.formData.email}
                                    validators={["required", "isEmail"]}
                                    errorMessages={["This field is required", "Email is not valid"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Password"
                                    onChange={this.handleChange}
                                    name="password"
                                    type={'password'}
                                    value={this.state.formData.password}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Street"
                                    onChange={this.handleChange}
                                    name="street"
                                    value={this.state.formData.street}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Zip Code"
                                    onChange={this.handleChange}
                                    name="zipcode"
                                    value={this.state.formData.zipcode}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Long Value"
                                    onChange={this.handleChange}
                                    name="longValue"
                                    value={this.state.formData.longValue}
                                    validators={["required","number"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />

                            </Grid>
                            <Grid container direction={'column'} item gap={2} xs={12} sm={5} md={5}>
                                <TextValidator
                                    label="Last Name"
                                    onChange={this.handleChange}
                                    name="lastName"
                                    value={this.state.formData.lastName}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="User Name"
                                    onChange={this.handleChange}
                                    name="userName"
                                    value={this.state.formData.userName}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="City"
                                    onChange={this.handleChange}
                                    name="city"
                                    value={this.state.formData.city}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Street No"
                                    onChange={this.handleChange}
                                    name="streetNo"
                                    value={this.state.formData.streetNo}
                                    validators={["required","number"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Lat Value"
                                    onChange={this.handleChange}
                                    name="latValue"
                                    value={this.state.formData.lat}
                                    validators={["required","number"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />
                                <TextValidator
                                    label="Mobile Number"
                                    onChange={this.handleChange}
                                    name="mobileNo"
                                    value={this.state.formData.mobileNo}
                                    validators={["required"]}
                                    errorMessages={["This field is required"]}
                                    className={[classes.textField, "w-full text-red-500"]}
                                />

                               </Grid>
                          {/*  <Grid container direction={'row'} xs={10.5} justifyContent={'center'}>
                                <Button
                                    component="label"
                                    variant="outlined"
                                    startIcon={<AddPhotoAlternateIcon className={classes.icon}/>}
                                    sx={{marginRight: "1rem"}}
                                    className={classes.btnUpload}
                                >
                                    Upload NIC Card or Driving License Card image
                                    <input type="file" accept="image/*" hidden
                                           onChange={(e) => this.handleFile(e)}/>
                                </Button>
                            </Grid>*/}
                            <CommonButton
                                size="large"
                                variant="contained"
                                label='Clear'
                                type="submit"
                                className="text-white bg-blue-500 font-bold tracking-wide"
                                style={{backgroundColor: 'rgb(204, 204, 0)', width: '20%'}}
                            />
                            <CommonButton
                                size="large"
                                variant="contained"
                                label='Save'
                                type="submit"
                                className="text-white bg-blue-500 font-bold tracking-wide"
                                style={{backgroundColor: 'rgba(25, 118, 210, 0.95)', width: '20%'}}
                            />
                        </Grid>
                    </ValidatorForm>
                </Grid>
            </Grid>
            <Grid container item xs={"auto"} className="flex p-5 gap-5">
                <Grid
                    container
                    item
                    xs={12}
                    gap="5px"
                    className="rounded-lg p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
                    style={{height: "700px"}}
                >
                    <GDSEDataTable
                        columns={this.state.columns}
                        rows={this.state.data}
                        rowsPerPageOptions={5}
                        pageSize={10}
                        // checkboxSelection={true}
                    />
                </Grid>
                <Dialog
                    open={this.state.popup}
                    maxWidth="md"
                    classes={{paper: classes.dialogWraper}}
                >
                    <DialogTitle style={{paddingRight: "0px"}}>
                        <div style={{display: "flex"}}>
                            <Typography
                                variant="h4"
                                component="div"
                                className="font-bold flex-grow"
                                style={{flexGrow: 1}}
                            >
                                Add New User
                            </Typography>

                            <IconButton onClick={() => this.setState({popup: false})}>
                               {/* <CloseIcon/>*/}
                            </IconButton>
                        </div>
                    </DialogTitle>
                    <DialogContent dividers>

                    </DialogContent>
                </Dialog>
            </Grid>
        </>);
    }
}

export default withStyles(styleSheet)(RegisterUser);