export default function FormRegisterScreen() {
    return (
        <main className="warp">
            <div className="mb-4">
                <div className="container">
                    <div className="box-content mt-4">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <span className="breadcrumb-hover">
                                        HOME
                                    </span>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    REGISTER
                                </li>
                            </ol>
                        </nav>
                        <form action="">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <div className="form-label">
                                            <label>社会の:</label>
                                            <span className="required ml-3">
                                                *
                                            </span>
                                        </div>
                                        <div className="form-group__control">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subcontract_name"
                                                placeholder="人類社会のすべての構成員"
                                                maxLength={255}
                                            />
                                        </div>
                                    </div>

                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <div className="form-label">
                                            <label>社会の:</label>
                                            <span className="required ml-3">
                                                *
                                            </span>
                                        </div>
                                        <div className="form-group__control">
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="subcontract_name"
                                                maxLength={255}
                                                placeholder="人類社会のすべての構成員"
                                            />
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <div className="form-label">
                                            <label>社会の:</label>
                                            <span className="required ml-3">
                                                *
                                            </span>
                                        </div>
                                        <div className="form-group__control">
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                name="subcontract_name"
                                                placeholder="人類社会のすべての構成員"
                                                maxLength={255}
                                                rows={5}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <div className="form-label">
                                            <label>社会の:</label>
                                            <span className="required ml-3">
                                                *
                                            </span>
                                        </div>
                                        <div className="form-group__control">
                                            <select
                                                className="form-control"
                                                name="subcontract_full_name"
                                            >
                                                <option value="-1">社会の:</option>
                                                <option value="-1">社会の:</option>
                                                <option value="-1">社会の:</option>
                                                <option value="-1">社会の:</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <div className="form-label">
                                            <label>社会の:</label>
                                            <span className="required ml-3">
                                                *
                                            </span>
                                        </div>
                                        <div className="d-flex flex-wrap">
                                            <div className="form-group__radio">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="subcontract_reminder_sms_flag"

                                                />
                                                <label className="form-check-label" htmlFor="no">
                                                    社会の
                                                </label>
                                            </div>
                                            <div className="form-group__radio">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="subcontract_reminder_sms_flag"

                                                />
                                                <label className="form-check-label" htmlFor="no">
                                                    社会の
                                                </label>
                                            </div>
                                            <div className="form-group__radio">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="subcontract_reminder_sms_flag"

                                                />
                                                <label className="form-check-label" htmlFor="no">
                                                    社会の
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <div className="form-label">
                                            <label>社会の:</label>
                                            <span className="required ml-3">
                                                *
                                            </span>
                                        </div>
                                        <div className="d-flex flex-wrap">
                                            <div className="form-group__radio">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="subcontract_reminder_sms_flag"

                                                />
                                                <label className="form-check-label" htmlFor="no">
                                                    社会の
                                                </label>
                                            </div>
                                            <div className="form-group__radio">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="subcontract_reminder_sms_flag"

                                                />
                                                <label className="form-check-label" htmlFor="no">
                                                    社会の
                                                </label>
                                            </div>
                                            <div className="form-group__radio">
                                                <input
                                                    className="form-check-input"
                                                    type="checkbox"
                                                    name="subcontract_reminder_sms_flag"

                                                />
                                                <label className="form-check-label" htmlFor="no">
                                                    社会の
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}