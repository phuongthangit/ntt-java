import CheckBoxComponent from "../../components/CheckBox/CheckBoxComponent";
import InputComponent from "../../components/Input/Input";
import LabelComponent from "../../components/Label/LabelComponent";
import RadioButtonComponent from "../../components/RadioButton/RadioButton";
import SelectBoxComponent from "../../components/SelectBox/SelectBox";
import TextAreaComponent from "../../components/TextArea/TextArea";

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
                                        ホームページ
                                    </span>
                                </li>
                                <li className="breadcrumb-item active" aria-current="page">
                                    登録
                                </li>
                            </ol>
                        </nav>
                        <form action="">
                            <div className="row">
                                <div className="col-lg-6">
                                    <InputComponent
                                        type={"text"}
                                        label={"ファーストネーム"}
                                        placeholder={"名を入力してください"}
                                        name={"first_name"}
                                        required={true} />
                                </div>
                                <div className="col-lg-6">
                                    <InputComponent
                                        type={"text"}
                                        label={"苗字"}
                                        placeholder={"お名前を入力してください"}
                                        name={"last_name"}
                                        required={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <InputComponent
                                        type={"email"}
                                        label={"Eメール"}
                                        placeholder={"あなたのメールアドレスを入力してください"}
                                        name={"email"}
                                        required={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <LabelComponent label={"セックス"} required={true} />
                                        <div className="d-flex flex-wrap">
                                            <RadioButtonComponent
                                                name={"gender"}
                                                value={"0"}
                                                label={"男"}
                                                defaultChecked={true}
                                                required={true} />
                                            <RadioButtonComponent
                                                name={"gender"}
                                                value={"1"}
                                                label={"女性"}
                                                defaultChecked={false}
                                                required={true} />
                                            <RadioButtonComponent
                                                name={"gender"}
                                                value={"2"}
                                                label={"他の"}
                                                defaultChecked={false}
                                                required={true} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <LabelComponent label={"使用言語"} required={false} />
                                        <div className="d-flex flex-wrap">
                                            <CheckBoxComponent
                                                name={"language"}
                                                value={"0"}
                                                label={"Vietnamese"}
                                                defaultChecked={true}
                                                required={false} />
                                            <CheckBoxComponent
                                                name={"language"}
                                                value={"1"}
                                                label={"Japanese"}
                                                defaultChecked={true}
                                                required={false} />
                                            <CheckBoxComponent
                                                name={"language"}
                                                value={"2"}
                                                label={"English"}
                                                defaultChecked={false}
                                                required={false} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <TextAreaComponent
                                        label={"説明"}
                                        placeholder={"説明を入力してください"}
                                        name={"description"}
                                        required={false}
                                        rows={5}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <SelectBoxComponent
                                        label={"市"}
                                        name={"city"}
                                        disabled={false}
                                        required={false} />
                                </div>
                                <div className="col-lg-4">
                                    <SelectBoxComponent
                                        label={"区域"}
                                        name={"district"}
                                        disabled={false}
                                        required={false} />
                                </div>
                                <div className="col-lg-4">
                                    <SelectBoxComponent
                                        label={"コミューン"}
                                        name={"province"}
                                        disabled={true}
                                        required={false} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <CheckBoxComponent
                                            name={"confirm"}
                                            value={"2"}
                                            label={"私は利用規約に同意します"}
                                            defaultChecked={false}
                                            required={false} />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <button type="submit" className="btn btn-primary btn-sm me-3 mb-3 mt-3 btn-custom">登録</button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-sm me-3 mb-3 mt-3 btn-custom"
                                    >キャンセル</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    )
}