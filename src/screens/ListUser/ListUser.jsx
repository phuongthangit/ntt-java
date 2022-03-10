import { MdAddCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
import { GoPencil, GoTrashcan } from "react-icons/go";
import typeCode from "../../constants/typeCode";
import { formatDate } from "../../utils/helper";


export default function ListUserScreen() {
    const userList = [
        {
            no: 1,
            fullname: '山田　太郎 1',
            gender: 1,
            birthday: '1990-01-01 00:00:00',
            phone: '03-XXXX-XXXX',
            email: 'xxx@gmail.com',
            room: '部署 1',
            position: '位置 1',
            application_date: '2021-11-15 00:00:00',
            zip_code: '001-3000',
            address: '都道府県 1',
            address_1: '住所１.１',
            address_2: '住所２.１',
            other: 'その他 1'

        },
        {
            no: 2,
            fullname: '山田　太郎 2',
            gender: 0,
            birthday: '1990-01-02 00:00:00',
            phone: '03-XXXX-XXXX',
            email: 'xxx@gmail.com',
            room: '部署 2',
            position: '位置 2',
            application_date: '2020-11-15 00:00:00',
            zip_code: '001-3001',
            address: '都道府県 2',
            address_1: '住所１.２',
            address_2: '住所２.２',
            other: 'その他 2'

        },
        {
            no: 3,
            fullname: '山田　太郎 3',
            gender: 0,
            birthday: '1992-01-03 00:00:00',
            phone: '03-XXXX-XXXX',
            email: 'xxx@gmail.com',
            room: '部署 3',
            position: '位置 3',
            application_date: '2020-11-15 00:00:00',
            zip_code: '001-3002',
            address: '都道府県 3',
            address_1: '住所１.３',
            address_2: '住所２.３',
            other: 'その他 3'

        },
        {
            no: 4,
            fullname: '山田　太郎 4',
            gender: 0,
            birthday: '1993-04-02 00:00:00',
            phone: '03-XXXX-XXXX',
            email: 'xxx@gmail.com',
            room: '部署 4',
            position: '位置 4',
            application_date: '2022-11-25 00:00:00',
            zip_code: '001-3003',
            address: '都道府県 4',
            address_1: '住所１.４',
            address_2: '住所２.４',
            other: 'その他 4'

        },
        {
            no: 5,
            fullname: '山田　太郎 5',
            gender: 1,
            birthday: '2000-07-25 00:00:00',
            phone: '03-XXXX-XXXX',
            email: 'xxx@gmail.com',
            room: '部署 5',
            position: '位置 5',
            application_date: '2018-09-11 00:00:00',
            zip_code: '001-3004',
            address: '都道府県 5',
            address_1: '住所１.５',
            address_2: '住所２.５',
            other: 'その他 5'

        },
    ]
    return (
        <main className="warp list-user">
            <div className="mb-4">
                <div className="card mt-4">
                    <div className="row" id="table-bordered">
                        <div className="col-12">
                            <div className="card">
                                <div className="card-content">
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <button type="button" className="btn btn-primary btn-sm">会員登録 <MdAddCircle className="icon-add mx-1" /></button>
                                        </div>
                                    </div>
                                    <div className="row mx-0">
                                        <div className="col-12 px-0">
                                            <div class="table-scroll mb-3 mx-3">
                                                <table class="table normal-table table-list-user">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="column-extra-small">
                                                                No
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                姓名
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-extra-small">
                                                                性別
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                生年月日
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                電話番号
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                メールアドレス
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                部署
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                位置
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                入社日
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                郵便番号
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                都道府県
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                住所１
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                住所２
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                その他
                                                                <AiFillCaretDown className="down" />
                                                                <AiFillCaretUp className="up" />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                編集/削除
                                                                <AiFillCaretDown className="down px-2" />
                                                                <AiFillCaretUp className="up mx-2" />
                                                            </th>

                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {
                                                            userList.length > 0 && userList.map((item) => {
                                                                return (
                                                                    <tr>
                                                                        <td>{item.no}</td>
                                                                        <td>{item.fullname}</td>
                                                                        <td>{typeCode.USER.GENDER_MAPPING[item.gender]}</td>
                                                                        <td>{formatDate(item.birthday)}</td>
                                                                        <td>{item.phone}</td>
                                                                        <td>{item.email}</td>
                                                                        <td>{item.room}</td>
                                                                        <td>{item.position}</td>
                                                                        <td>{formatDate(item.application_date)}</td>
                                                                        <td>{item.zip_code}</td>
                                                                        <td>{item.address}</td>
                                                                        <td>{item.address_1}</td>
                                                                        <td>{item.address_2}</td>
                                                                        <td>{item.other}</td>
                                                                        <td className="text-center">
                                                                            <GoPencil className="edit" />
                                                                            <GoTrashcan className="delete" />
                                                                        </td>
                                                                    </tr>
                                                                )
                                                            })
                                                        }
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}