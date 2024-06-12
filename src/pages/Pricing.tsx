const Pricing = () => {
  return (
    <div className="body">
      <div className="content">
        <section>
          <table className="pt">
            <thead className="pt-header-container">
              <tr className="pt-header-row">
                <th className="pt-header-item" >(All Prices Shown in USD)</th>
                <th className="pt-header-item" >Self Hosted</th>
                <th className="pt-header-item" >Small Business</th>
                <th className="pt-header-item" >Enterprise</th>
              </tr>
            </thead>
            <tbody className="pt-body-container">
              <tr className="pt-body-row">
                <td className="pt-body-row-data">
                  <p>Billed Annualy</p>
                  <p>Billed Monthly</p>
                </td>
                <td className="pt-body-row-data"></td>
                <td className="pt-body-row-data"></td>
              </tr>
              <tr className="pt-body-row">
                <td className="pt-body-row-data">
                  <p>Max Users</p>
                </td>
                <td className="pt-body-row-data"></td>
                <td className="pt-body-row-data"></td>
                <td className="pt-body-row-data"></td>
              </tr>
              <tr className="pt-body-row">
                <td className="pt-body-row-data">
                  <p>Max Asssets</p>
                </td>
                <td className="pt-body-row-data"></td>
                <td className="pt-body-row-data"></td>
                <td className="pt-body-row-data"></td>
              </tr>
              <tr className="pt-body-row">
                <td className="pt-body-row-data">
                  <p>Community Support</p>
                </td>
                <td className="pt-body-row-data"></td>
                <td className="pt-body-row-data"></td>
                <td className="pt-body-row-data"></td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
    </div>
  );
};

export { Pricing };
