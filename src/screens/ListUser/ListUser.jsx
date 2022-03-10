import { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { GoPencil, GoTrashcan } from "react-icons/go";
import typeCode from "../../constants/typeCode";
import { formatDate, sortUserList } from "../../utils/helper";
import constants from "../../constants/constants";
import SortTable from "../../components/Sort/SortTable";
import ReactPaginate from 'react-paginate';
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import LinkName from "../../constants/linkName";


export default function ListUserScreen() {

    let navigate = useNavigate();
    /**
     * define constant
     */
    const [parameter, setParameter] = useState({
        column: '',
        order: ''
    });
    const [pageLimit] = useState(5);
    const [pageCount, setPageCount] = useState(0);
    const [pageCurrent, setPageCurrent] = useState(1);

    const [userList, setUserList] = useState(() => {
        return constants.userList.slice(pageCurrent - 1, pageCurrent - 1 + pageLimit);
    });


    /**
     * on page change
     * @param {*} 
     */
    const _onPageChange = (e) => {
        const selectedPage = e.selected;
        setPageCurrent(selectedPage + 1);
    }

    const _onNavigate = () => {
        navigate(LinkName.FORM_REGISTER);
    }

    /**
     * sort
     * @param {*} column 
     * @param {*} order 
     */
    const _sort = (column, order) => {
        setParameter({
            column: column,
            order: order
        })
        setUserList(sortUserList(userList, column, order));
    }

    /**
     * get page count
     */
    useEffect(() => {
        if(userList){
            setPageCount(Math.ceil(constants.userList.length / pageLimit));
        }
    },[userList]);

    /**
     * set user when change page
     */
    useEffect(() => {
        setUserList(sortUserList(constants.userList.slice((pageCurrent - 1) * pageLimit, (pageCurrent * pageLimit)), parameter.column, parameter.order));
    }, [pageCurrent]);

    /**
     * render template
     */
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
                                            <button onClick={_onNavigate} type="button" className="btn btn-primary btn-sm">会員登録 <MdAddCircle className="icon-add mx-1" /></button>
                                        </div>
                                    </div>
                                    <div className="row mx-0">
                                        <div className="col-12 px-0">
                                            <div class="table-scroll mb-3 mx-3">
                                                <table class="table normal-table table-list-user">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="column-extra-small">
                                                                No.
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                姓名
                                                                <SortTable
                                                                    name={"fullname"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-extra-small">
                                                                性別
                                                                <SortTable
                                                                    name={"gender"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                生年月日
                                                                <SortTable
                                                                    name={"birthday"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                電話番号
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                メールアドレス
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                部署
                                                                <SortTable
                                                                    name={"room"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                位置
                                                                <SortTable
                                                                    name={"position"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                入社日
                                                                <SortTable
                                                                    name={"application_date"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                郵便番号
                                                                <SortTable
                                                                    name={"zip_code"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                都道府県
                                                                <SortTable
                                                                    name={"address"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                住所１
                                                                <SortTable
                                                                    name={"address_1"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                住所２
                                                                <SortTable
                                                                    name={"address_2"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                その他
                                                                <SortTable
                                                                    name={"other"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                編集/削除
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
                                            {pageCount > 1 && <div className="d-flex justify-content-end mx-3">
                                                <ReactPaginate
                                                    previousLabel={<AiOutlineDoubleLeft className="previous" />}
                                                    nextLabel={<AiOutlineDoubleRight className="next" />}
                                                    breakLabel={"..."}
                                                    breakClassName={"break-me"}
                                                    pageCount={pageCount}
                                                    onPageChange={_onPageChange}
                                                    containerClassName={"pagination"}
                                                    subContainerClassName={"pages pagination"}
                                                    activeClassName={"active"} />
                                            </div>}
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