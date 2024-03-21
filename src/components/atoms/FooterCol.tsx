interface IFooterCol {
  Title: string;
  Items: string[];
}

function FooterCol({ Title, Items }: IFooterCol) {
  return (
    <div className="flex flex-col gap-3">
      <p style={{ fontFamily: "Big Shoulders", fontWeight: 600 }}>{Title}</p>
      {Items.map((item: string) => (
        <p className="cursor-pointer">{item}</p>
      ))}
    </div>
  );
}

export default FooterCol;
