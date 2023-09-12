const AcuityLogo = ({ onClick, color }) => {
  const style = {
    width: "30px",
    height: "30px"
  };
  return (
    <a
      onClick={onClick}
      style={style}
      href="https://acuityppm.com/"
      target="_blank"
      rel="noreferrer"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 1095 1047"
        fill={color}
      >
        <title>acuity logo</title>
        <polygon points="572 0 0 1046 707 262 572 0" />
        <polygon points="830 502 727 299 18 1040 830 502" />
        <path d="M858,559,17,1047c387-174,798-373,1078-43Z" />
      </svg>
    </a>
  );
};

export default AcuityLogo;
