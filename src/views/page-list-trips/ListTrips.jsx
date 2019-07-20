import React, { Fragment, useState } from "react";
import MateritalTable from "material-table";
const ListTrips = () => {
  const [state, setState] = useState({
    columns: [
      { title: "Form - To", field: "HCM" },
      { title: "Xe", field: "SUV" },
      { title: "Driver", field: "Nguyen Van D" },
      { title: "Tien", field: "100000" }
    ]
  });
  return (
    <Fragment>
      <section className="hero is-primary is-medium">
        <div className="hero-body">
          <div className="container">
            <MateritalTable
              title="Danh sách chuyến đi"
              columns={state.columns}
            />
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default ListTrips;
