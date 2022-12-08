import CardDiskusi from "./CardDiskusi";

const FilterDiskusi = ({ data }) => {
    return (
      <>
          {data.map((item) => (
            <div className="row">
                <div className="col-12">
                    <CardDiskusi judul={item.judul_diskusi} creator={item.user.nama} foto={item.user.foto_url} lihat={item.jumlah_kunjungan} link={item.did} />
                </div>
            </div>
          ))}
      </>
    );
  };
  
  export default FilterDiskusi;