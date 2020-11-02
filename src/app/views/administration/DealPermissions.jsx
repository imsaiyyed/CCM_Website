import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import { makeStyles } from "@material-ui/core/styles";

import {
  Table,
  TableHead,
  TableCell,
  TableBody,
  Button,
  TableRow,
} from "@material-ui/core";
import { Breadcrumb, SimpleCard } from "matx";
// import { Icon, Button, IconButton, Fab } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
    float:"inline-end"
  },
  input: {
    display: "none"
  }
}));
const subscribarList = [
  {
    Retrive: "john doe",
    Create: "18 january, 2019",
    Update: 1000,
    Delete: "close",
    Role: "Admin",
  },
  {
    Retrive: "john doe",
    Create: "18 january, 2019",
    Update: 1000,
    Delete: "close",
    Role: "Employee",
  },
];

const DealPermissions = () => {
  const classes = useStyles();

  return (
    <div className="m-sm-30">
      <div className="mb-sm-30">
        <Breadcrumb
          routeSegments={[
            { name: "Administration", path: "/administration" },
            { name: "Change Deal Permissions" },
          ]}
        />
      </div>
      <SimpleCard title="Change Deal Permissions">
        <div className="w-100 overflow-auto">
          <Table style={{ whiteSpace: "pre" }}>
            <TableHead>
              <TableRow>
                <TableCell className="px-0">Role</TableCell>
                <TableCell className="px-0">Retrive</TableCell>
                <TableCell className="px-0">Create</TableCell>
                <TableCell className="px-0">Update</TableCell>
                <TableCell className="px-0">Delete</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscribarList.map((subscriber, index) => (
                <TableRow key={index}>
                  <TableCell className="px-0 capitalize" align="left">
                    {subscriber.Role}
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="left">
                    <Checkbox checked={true} />
                  </TableCell>
                  <TableCell className="px-0 capitalize" align="left">
                    <Checkbox checked={true} />
                  </TableCell>
                  <TableCell className="px-0 capitalize">
                    <Checkbox checked={true} />
                  </TableCell>
                  <TableCell className="px-0 capitalize">
                    <Checkbox checked={true} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <Button variant="contained" color="primary" className={classes.button}>
          Save Changes
        </Button>
      </SimpleCard>
    </div>
  );
};

export default DealPermissions;
