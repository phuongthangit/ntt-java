import CheckBoxComponent from "../../components/CheckBox/CheckBoxComponent";
import DatePickerComponent from "../../components/DatePicker/DatePicker";
import InputComponent from "../../components/Input/Input";
import InputFlexComponent from "../../components/Input/InputFlex";
import LabelComponent from "../../components/Label/LabelComponent";
import RadioButtonComponent from "../../components/RadioButton/RadioButton";
import SelectBoxComponent from "../../components/SelectBox/SelectBox";
import TextAreaComponent from "../../components/TextArea/TextArea";
import TextAreaFlexComponent from "../../components/TextArea/TextAreaFlex";

export default function FormRegisterScreen() {
    return (
        <main className="warp">
            <div className="mb-4">
                <div className="box-content mt-4">
                    <form action="">
                        <div className="col-8">
                            <div className="row mb-3">
                                <div className="col-lg-12">
                                    <LabelComponent label={"名前"} required={true} />
                                </div>
                                <div className="col-lg-6">
                                    <InputComponent
                                        type={"text"}
                                        label={"姓"}
                                        placeholder={"姓を入力してください"}
                                        name={"last_name"}
                                        required={true} />
                                </div>
                                <div className="col-lg-6">
                                    <InputComponent
                                        type={"text"}
                                        label={"名"}
                                        placeholder={"名を入力してください"}
                                        name={"first_name"}
                                        required={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-lg-12">
                                    <LabelComponent label={"ふりがな"} required={true} />
                                </div>
                                <div className="col-lg-6">
                                    <InputComponent
                                        type={"text"}
                                        label={"せい "}
                                        placeholder={"せいを入力してください"}
                                        name={"last_name_kana"}
                                        required={true} />
                                </div>
                                <div className="col-lg-6">
                                    <InputComponent
                                        type={"text"}
                                        label={"めい"}
                                        placeholder={"めいを入力してください"}
                                        name={"first_name_kana"}
                                        required={true} />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group d-flex flex-wrap">
                                        <LabelComponent label={"性別 "} required={true} />
                                        <div className="d-flex flex-wrap">
                                            <RadioButtonComponent
                                                name={"gender"}
                                                value={"0"}
                                                label={"男性"}
                                                defaultChecked={true}
                                                required={true} />
                                            <RadioButtonComponent
                                                name={"gender"}
                                                value={"1"}
                                                label={"女性"}
                                                defaultChecked={false}
                                                required={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group d-flex flex-wrap">
                                        <LabelComponent label={"性別 "} required={true} />
                                        <div className="d-flex justify-content-center align-items-start">
                                            <SelectBoxComponent
                                                label={"男性"}
                                                defaultChecked={true}
                                                required={true} />
                                            <SelectBoxComponent
                                                label={"男性"}
                                                defaultChecked={true}
                                                required={true} />
                                            <SelectBoxComponent
                                                label={"男性"}
                                                defaultChecked={true}
                                                required={true} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr />

                            <div className="row mb-3">
                                <div className="col-12">
                                    <InputFlexComponent
                                        type={"text"}
                                        label={"年齢"}
                                        placeholder={"年齢は半角数字にしてください。"}
                                        name={"age"}
                                        required={true} />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-3">
                                <div className="col-12">
                                    <InputFlexComponent
                                        type={"text"}
                                        label={"電話番号①"}
                                        placeholder={"電話番号①を入力してください"}
                                        name={"home_tel"}
                                        required={true} />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-3">
                                <div className="col-12">
                                    <InputFlexComponent
                                        type={"text"}
                                        label={"電話番号②"}
                                        placeholder={"電話番号②を入力してください"}
                                        name={"mobile_tel"}
                                        required={false} />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-3">
                                <div className="col-12">
                                    <InputFlexComponent
                                        type={"text"}
                                        label={"郵便番号"}
                                        placeholder={"郵便番号を入力してください"}
                                        name={"postal_code"}
                                        required={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 d-flex">
                                    <LabelComponent label={"都道府県"} required={true} />
                                    <SelectBoxComponent
                                        type={"text"}
                                        name={"pref_name"}
                                        required={true} />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12">
                                    <InputFlexComponent
                                        type={"text"}
                                        label={"住所1"}
                                        placeholder={"その他住所１を入力してください"}
                                        name={"address_1"}
                                        required={true} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <InputFlexComponent
                                        type={"text"}
                                        label={"住所2"}
                                        placeholder={"その他住所2を入力してください"}
                                        name={"address_2"}
                                        required={false} />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-3">
                                <div className="col-12">
                                    <InputFlexComponent
                                        type={"email"}
                                        label={"メールアドレス"}
                                        placeholder={"メールアドレスを入力してください"}
                                        name={"mail_address"}
                                        required={true} />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-3">
                                <div className="col-12">
                                    <InputFlexComponent
                                        type={"email"}
                                        label={`希望勤務地\n都道府県`}
                                        placeholder={"未選択"}
                                        name={"mail_address"}
                                        required={false} />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-3">
                                <div className="col-12">
                                    <InputFlexComponent
                                        type={"email"}
                                        label={"メールアドレス"}
                                        placeholder={"メールアドレスを入力してください"}
                                        name={"mail_address"}
                                        required={true} />
                                </div>
                            </div>
                            <hr />
                            <div className="row">
                                <div className="col-lg-12 d-flex">
                                    <LabelComponent label={"応募日 "} required={false} />
                                    <DatePickerComponent
                                        required={true}
                                        name={"application_date"} />
                                </div>
                            </div>
                            <hr />
                            <div className="row mb-3">
                                <div className="col-lg-12">
                                    <TextAreaFlexComponent
                                        label={"説明"}
                                        placeholder={"説明を入力してください"}
                                        name={"description"}
                                        required={false}
                                        rows={5}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-12 d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary btn-sm me-3 mb-3 mt-3">保存</button>
                                    <button
                                        type="button"
                                        className="btn btn-secondary btn-sm mb-3 mt-3"
                                    >キャンセル</button>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">

                        </div>

                    </form>
                </div>
            </div>
        </main>
    )
}