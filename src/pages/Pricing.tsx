import '../css/tables.css';

const Pricing = () => {
  return (
    <div className="body">
      <div className="content">
        <section>
          <table className="pt">
            <thead className="pt-header-container">
              <tr className="pt-header-row">
                <th className="pt-header-item table-grayed">
                  <h6>(All Prices Shown in USD)</h6>
                </th>
                <th className="pt-header-item">
                  <h5>Self Hosted</h5>
                </th>
                <th className="pt-header-item">
                  <h5>Small Business</h5>
                </th>
                <th className="pt-header-item">
                  <h5>Enterprise</h5>
                </th>
              </tr>
            </thead>
            <tbody className="pt-body-container">
              <tr className="pt-body-row">
                <td className="pt-body-row-data">
                  <h5>Billed Annualy</h5>
                  <h6>Billed Monthly</h6>
                </td>
                <td className="pt-body-row-data">$0</td>
                <td className="pt-body-row-data">$30</td>
                <td className="pt-body-row-data">Specal Pricing</td>
              </tr>
              <tr className="pt-body-row">
                <td className="pt-body-row-data">
                  <h5>Max Users</h5>
                </td>
                <td className="pt-body-row-data">$0</td>
                <td className="pt-body-row-data">$30</td>
                <td className="pt-body-row-data">Specal Pricing</td>
              </tr>
              <tr className="pt-body-row">
                <td className="pt-body-row-data">
                  <h5>Max Asssets</h5>
                </td>
                <td className="pt-body-row-data">$0</td>
                <td className="pt-body-row-data">$30</td>
                <td className="pt-body-row-data">Specal Pricing</td>
              </tr>
              <tr className="pt-body-row">
                <td className="pt-body-row-data">
                  <h5>Community Support</h5>
                </td>
                <td className="pt-body-row-data">$0</td>
                <td className="pt-body-row-data">$30</td>
                <td className="pt-body-row-data">Specal Pricing</td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export { Pricing };
