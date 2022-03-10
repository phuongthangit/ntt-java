export default function ListUserScreen() {
    const userList = [
        {
            no: 1,
            fullname: 'Phương Công Thắng',
            age: 22,
            email: 'thang.pc@beetechsoft.vn',
            birthday: '25/07/2000',
            position: 'を入力してください'

        },
        {
            no: 1,
            fullname: 'Phương Công Thắng',
            age: 22,
            email: 'thang.pc@beetechsoft.vn',
            birthday: '25/07/2000',
            position: 'を入力してください'

        },
        {
            no: 1,
            fullname: 'Phương Công Thắng',
            age: 22,
            email: 'thang.pc@beetechsoft.vn',
            birthday: '25/07/2000',
            position: 'を入力してください'

        },
        {
            no: 1,
            fullname: 'Phương Công Thắng',
            age: 22,
            email: 'thang.pc@beetechsoft.vn',
            birthday: '25/07/2000',
            position: 'を入力してください'

        }
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
                                        <div className="d-flex justify-content-start">
                                            <button type="button" className="btn btn-primary btn-sm me-3 mb-3 mt-3">保存</button>
                                        </div>
                                    </div>
                                    <div className="table-responsive">
                                        <table className="table table-bordered mb-0">
                                            <thead>
                                                <tr>
                                                    <th>NAME</th>
                                                    <th>RATE</th>
                                                    <th>SKILL</th>
                                                    <th>TYPE</th>
                                                    <th>LOCATION</th>
                                                    <th>ACTION</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td className="text-bold-500">Michael Right</td>
                                                    <td>$15/hr</td>
                                                    <td className="text-bold-500">UI/UX</td>
                                                    <td>Remote</td>
                                                    <td>Austin,Taxes</td>
                                                    <td>
                                                        <a href="#">
                                                            <i
                                                                className="badge-circle badge-circle-light-secondary font-medium-1"
                                                                data-feather="mail"
                                                            />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-bold-500">Morgan Vanblum</td>
                                                    <td>$13/hr</td>
                                                    <td className="text-bold-500">Graphic concepts</td>
                                                    <td>Remote</td>
                                                    <td>Shangai,China</td>
                                                    <td>
                                                        <a href="#">
                                                            <i
                                                                className="badge-circle badge-circle-light-secondary font-medium-1"
                                                                data-feather="mail"
                                                            />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-bold-500">Tiffani Blogz</td>
                                                    <td>$15/hr</td>
                                                    <td className="text-bold-500">Animation</td>
                                                    <td>Remote</td>
                                                    <td>Austin,Texas</td>
                                                    <td>
                                                        <a href="#">
                                                            <i
                                                                className="badge-circle badge-circle-light-secondary font-medium-1"
                                                                data-feather="mail"
                                                            />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-bold-500">Ashley Boul</td>
                                                    <td>$15/hr</td>
                                                    <td className="text-bold-500">Animation</td>
                                                    <td>Remote</td>
                                                    <td>Austin,Texas</td>
                                                    <td>
                                                        <a href="#">
                                                            <i
                                                                className="badge-circle badge-circle-light-secondary font-medium-1"
                                                                data-feather="mail"
                                                            />
                                                        </a>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="text-bold-500">Mikkey Mice</td>
                                                    <td>$15/hr</td>
                                                    <td className="text-bold-500">Animation</td>
                                                    <td>Remote</td>
                                                    <td>Austin,Texas</td>
                                                    <td>
                                                        <a href="#">
                                                            <i
                                                                className="badge-circle badge-circle-light-secondary font-medium-1"
                                                                data-feather="mail"
                                                            />
                                                        </a>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
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