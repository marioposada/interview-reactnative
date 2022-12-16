import React from "react";
import { View, TextInput, Text } from "react-native";
import Styles from "../styles";
import Button from "./base/Button";
import Table from "./base/Table";
import TableRow from "./base/TableRow";
import TableData from "./base/TableData";
import TableHeader from "./base/TableHeader";
import TableBody from "./base/TableBody";



function TransactionTable({ txns }) {

    const sort = (array) => {
       
        const sorted = array.sort((a, b) => a.amount - b.amount);
        
      return sorted
  
      };

  const [sortOrder, setSortOrder] = React.useState(sort(txns));

   




  return (
    <View
      style={[Styles.layout_column, Styles.align_items_center, Styles.mt_50]}
    >
      <View
        style={[
          Styles.layout_row,
          Styles.align_items_center,
          Styles.justify_content_center,
        ]}
      >
        <Text style={[Styles.mr_10]}>Transaction Date</Text>
        <TextInput
          style={[Styles.px_10, Styles.input_large]}
          testID="app-input"
          placeholder="YYYY-MM-DD"
        />
        <View>
          <Button
            style={[Styles.mx_8, Styles.button, Styles.button_small]}
            testID="submit-button"
          >
            Filter
          </Button>
        </View>
      </View>

      <View style={[Styles.card, Styles.mt_50, { minWidth: "65%" }]}>
        <Table>
          <View>
            <TableRow>
              <TableHeader>Date</TableHeader>
              <TableHeader flex={3.5}>Description</TableHeader>
              <TableHeader>Type</TableHeader>
              <TableHeader
                testID="amount"
                onPress={sort}
                style={[Styles.table_thead_tr_th_sortable]}
              >
                Amount ($)
              </TableHeader>
              <TableHeader>Available Balance</TableHeader>
            </TableRow>
            <TableBody testID="records-body">
              {sortOrder.map((txn, index) => (
                <TableRow key={index}>
                  <TableData>{txn.date}</TableData>
                  <TableData flex={3.5}>{txn.description}</TableData>
                  <TableData>{txn.type === 1 ? "Debit" : "Credit"}</TableData>
                  <TableData>{txn.amount}</TableData>
                  <TableData>{txn.balance}</TableData>
                </TableRow>
              ))}
            </TableBody>
          </View>
        </Table>
      </View>
    </View>
  );
}

export default TransactionTable;
