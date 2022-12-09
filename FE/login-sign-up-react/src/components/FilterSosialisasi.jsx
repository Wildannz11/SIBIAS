import CardSosialisasi from "./CardSosialisasi";

const FilterSosialisasi = ({ data }) => {
    return (
      <>
          {data.map((item) => (
            <div className="col-md-4 col-sm-6 mb-3">
                <CardSosialisasi image={item.foto_url} judul={item.judul_kebijakan} isi={item.isi_kebijakan} link={item.kid} />
            </div>
          ))}
      </>
    );
  };
  
  export default FilterSosialisasi;