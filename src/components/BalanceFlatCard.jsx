const BalanceFlatCard = ({ subtitle }) => {
  return (
    <div className="balance-wrapper">
      <div className="flex justify-between">
        <h4
          className="text-body-medium m-0"
          style={{ color: "var(--grey-700)" }}
        >
          EUR Balance
        </h4>
        <h4
          className="text-body-medium m-0"
          style={{ color: "var(--secondary)" }}
        >
          View
        </h4>
      </div>

      <h2 className="m-0" style={{ lineHeight: 0 }}>
        €3,582.31
      </h2>
      <p className="text-sm  m-0" style={{ color: "var(--grey-700)" }}>
        {subtitle}
      </p>
    </div>
  );
};

export default BalanceFlatCard;
