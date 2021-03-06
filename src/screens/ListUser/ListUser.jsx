import { useEffect, useState } from "react";

//icon
import { MdAddCircle } from "react-icons/md";
import { GoPencil, GoTrashcan } from "react-icons/go";
import { AiOutlineDoubleLeft, AiOutlineDoubleRight } from "react-icons/ai";

//constant
import typeCode from "../../constants/typeCode";
import { formatDate, sortUserList } from "../../utils/helper";
import constants from "../../constants/constants";
import LinkName from "../../constants/linkName";

//component
import SortTable from "../../components/Sort/SortTable";

//packet
import ReactPaginate from 'react-paginate';
import { useNavigate } from 'react-router-dom';


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
        if (userList) {
            setPageCount(Math.ceil(constants.userList.length / pageLimit));
        }
    }, [userList]);

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
                                    <div className="card-header">
                                        <div className="row">
                                            <div className="col-12">
                                                <h4 className="card-title">????????????</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="d-flex justify-content-end">
                                            <button onClick={_onNavigate} type="button" className="btn btn-primary btn-sm">???????????? <MdAddCircle className="icon-add mx-1" /></button>
                                        </div>
                                    </div>
                                    <div className="row mx-0">
                                        <div className="col-12 px-0">
                                            <div className="table-scroll mb-3 mx-3">
                                                <table className="table normal-table table-list-user">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col" className="column-extra-small">
                                                                No.
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ??????
                                                                <SortTable
                                                                    name={"fullname"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-extra-small">
                                                                ??????
                                                                <SortTable
                                                                    name={"gender"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ????????????
                                                                <SortTable
                                                                    name={"birthday"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ????????????
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ?????????????????????
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ??????
                                                                <SortTable
                                                                    name={"room"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ??????
                                                                <SortTable
                                                                    name={"position"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ?????????
                                                                <SortTable
                                                                    name={"application_date"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ????????????
                                                                <SortTable
                                                                    name={"zip_code"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ????????????
                                                                <SortTable
                                                                    name={"address"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ?????????
                                                                <SortTable
                                                                    name={"address_1"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ?????????
                                                                <SortTable
                                                                    name={"address_2"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ?????????
                                                                <SortTable
                                                                    name={"other"}
                                                                    sort={_sort}
                                                                    parameter={parameter} />
                                                            </th>
                                                            <th scope="col" className="column-small">
                                                                ??????/??????
                                                            </th>

                                                        </tr>
                                                    </thead>

                                                    <tbody>
                                                        {
                                                            userList.length > 0 && userList.map((item) => {
                                                                return (
                                                                    <tr key={item.no}>
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