import redToken from "../assets/images/counter-red-small.svg";
import yellowToken from "../assets/images/counter-yellow-small.svg";

const Slot = ({ ch, y, x }) => {
  return (
    <div className="slot" x={x} y={y}>
      {ch && (
        <img
          src={ch === "X" ? redToken : yellowToken}
          width="100%"
          height="100%"
        />
      )}
    </div>
  );
};

export default Slot;
