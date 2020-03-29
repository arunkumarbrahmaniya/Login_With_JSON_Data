import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography } from "../../includes";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import TableHead from "@material-ui/core/TableHead";
import Paper from "@material-ui/core/Paper";
import { user } from '../../common_json/userdata';
class Dashboard extends Component {
  render() {
    const headerTextColor = {color:'white'};
    return (
      <Typography variant="display1" gutterBottom component="h2">
        <Paper style={{ width:'70%', marginLeft:'15%', marginTop:'5%' }}>
          <Table>
            <TableHead style={{ backgroundColor: '#000000' }}>
              <TableRow>
                <TableCell style={headerTextColor}>ID</TableCell>
                <TableCell style={headerTextColor}>NAME</TableCell>
                <TableCell style={headerTextColor}>AGE</TableCell>
                <TableCell style={headerTextColor}>GENDER</TableCell>
                <TableCell style={headerTextColor}>EMAIL</TableCell>
                <TableCell style={headerTextColor}>CONTACT</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {
                user.map(employee => (<TableRow>
                      <TableCell>{employee.id}</TableCell>
                      <TableCell>{employee.name}</TableCell>
                      <TableCell>{employee.age}</TableCell>
                      <TableCell>{employee.gender}</TableCell>
                      <TableCell>{employee.email}</TableCell>
                      <TableCell>{employee.phoneNo}</TableCell>
                    </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </Paper>
      </Typography>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
