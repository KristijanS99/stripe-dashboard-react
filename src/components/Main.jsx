import SearchBar from "./SearchBar";
import AppIcon from "./AppIcon";
import LabelSelect from "./LabelSelect";
import BalanceFlatCard from "./BalanceFlatCard";
import { APP_ICONS } from "../assets/icons";

const Main = () => {
  return (
    <div className="w-100" style={{ padding: "25px 40px 25px 40px" }}>
      <div className="flex justify-between">
        <SearchBar />

        <div className="flex" style={{ gap: 16 }}>
          <AppIcon icon={APP_ICONS.Notifications} />
          <AppIcon icon={APP_ICONS.Help} />
          <AppIcon icon={APP_ICONS.Account} />
        </div>
      </div>

      <div
        className="divider"
        style={{
          marginLeft: "-40px",
          marginTop: 20,
          width: "calc(100% + 80px)",
        }}
      />

      <div
        className="flex"
        style={{ flexDirection: "column", maxWidth: 1170, margin: "0 auto" }}
      >
        <h1 className="font-bold">Today</h1>

        <div className="divider" />

        <div className="flex w-100 dashboard-wrapper-top">
          <div
            className="flex dashboard-chart-top"
            style={{ flexDirection: "column" }}
          >
            <div
              className="flex"
              style={{ gap: 84, marginTop: 16, marginBottom: 16 }}
            >
              <div className="flex" style={{ gap: 7, flexDirection: "column" }}>
                <LabelSelect label="Gross volume" />
                <h2 style={{ lineHeight: 0 }}>€1,452.25</h2>
                <p
                  style={{ color: "var(--grey-700)", margin: 0 }}
                  className="text-sm"
                >
                  04:48
                </p>
              </div>
              <div
                className="flex"
                style={{ gap: 11, flexDirection: "column" }}
              >
                <LabelSelect label="Yesterday" />
                <h2
                  className="text-heading-medium font-regular"
                  style={{ lineHeight: 0, color: "var(--grey-600)" }}
                >
                  €1,452.25
                </h2>
              </div>
            </div>

            <img
              style={{ maxWidth: "100%", width: 692, height: 104 }}
              src={require("../assets/full-graph-chart.png")}
            />
          </div>

          <div
            className="flex dashboard-balances-top"
            style={{ flexDirection: "column" }}
          >
            <BalanceFlatCard subtitle="Estimated future payouts" />

            <div className="divider" />

            <BalanceFlatCard subtitle="Deposited on 8 Jun" />
          </div>
        </div>

        <div
          className="divider hidden-sm"
          style={{
            marginLeft: "-40px",
            width: "calc(100% + 80px)",
          }}
        />
      </div>
    </div>
  );
};

export default Main;
