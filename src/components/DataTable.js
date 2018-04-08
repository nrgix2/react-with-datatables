import React, { Component } from 'react';
const $ = require('jquery');
$.DataTable = require('datatables.net');

class DataTable extends Component {
  formatHiddenDropdown(dataFromTableRow) {
    // This is where the item dropdown for each table row is formatted.
    return (
      '<strong>Year of access:</strong><br />' +
      '<p>' + dataFromTableRow[3] + '</p>'
    );
  }

  componentDidMount() {
    // We need a reference to "this" so we can use it within jQuery.
    const self = this;

    this.$el = $(this.el);
    let table = this.$el.DataTable({
      data: this.props.schools,
      columnDefs: [
        {
          "targets": [ 3 ],
          "visible": false,
          "searchable": true
        }
      ],
      columns: [
        { "title": "", className: 'details-control' },
        { title: "Unit ID" },
        { title: "Institution" },
        { title: "Year" },
      ],
      order: [ 1, 'asc' ],
      ordering: true
    });

    // Add event listener for opening and closing details.
    $('#table tbody').on('click', 'td.details-control', function() {
      let tr = $(this).closest('tr');
      let row = table.row( tr );

      if ( row.child.isShown() ) {
        // Hide details
        row.child.hide();
        tr.removeClass('shown');
      }
      else {
        // Show details
        row.child( self.formatHiddenDropdown(row.data()) ).show();
        tr.addClass('shown');
      }
    });
  }

  componentWillUnmount() {
    /*
    When the datatable is unmounted, destroy it so that react's
    dom manipulation doesn't conflict with jQuery's dom manipulation.
    */
    $('.data-table-wrapper')
       .find('table')
       .DataTable()
       .destroy(true);
  }

  render() {
    return (
      <div>
        <table
          id="table"
          className="table table-striped table-hover driver-table driver-table-responsive display dt-responsive"
          width="100%"
          ref={el => this.el = el}
        ></table>
      </div>
    );
  }
}

export default DataTable;
