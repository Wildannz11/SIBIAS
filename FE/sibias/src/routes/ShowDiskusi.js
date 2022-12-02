import react from "react"
import "./css/ShowDiskusi.css"
import CommentDiskusi from "../components/CommentDiskusi";

function ShowDiskusi(){
    return (
        <div>
            <div className="text-center">
                <h1>Detail Diskusi</h1>
            </div>
                <CommentDiskusi judul="Diskusi Kebijakan Kenaikan BBM" creator="Cahya Diantoni" waktu="09.00" deskripsi="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book." lihat="1000" komentar="30"/>

        </div>
  )
}

export default ShowDiskusi;