//component
import InputComponent from "../../components/Input/Input";
import InputFlexComponent from "../../components/Input/InputFlex";
import LabelComponent from "../../components/Label/LabelComponent";
import RadioButtonComponent from "../../components/RadioButton/RadioButton";
import SelectBoxComponent from "../../components/SelectBox/SelectBox";
import TextAreaFlexComponent from "../../components/TextArea/TextAreaFlex";

//packet
import { useForm, FormProvider } from 'react-hook-form';

export default function FormRegisterScreen() {

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });

    const roomList = ['部署1', '部署2', '部署3'];
    const year = [2022, 2021, 2020, 2019, 2018];
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    return (
        <main className="warp form-register">
            <div className="mb-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-8">
                                <h4 className="card-title">会員登録</h4>
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <FormProvider {...methods}>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-12 col-md-12 col-left">
                                        <div className="row mb-3">
                                            <div className="col-lg-12">
                                                <LabelComponent label={"名前"} required={true} />
                                            </div>
                                            <div className="col-lg-6 mb-3">
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
                                            <div className="col-lg-6 mb-3">
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
                                        
                                        <div className="row mb-3">
                                            <div className="col-lg-6">
                                                <div className="form-group d-flex flex-wrap">
                                                    <LabelComponent label={"性別"} required={true} />
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
                                        
                                        <div className="row mb-3">
                                            <div className="col-lg-12 d-flex date-of-birth">
                                                <LabelComponent label={"生年月日"} required={true} />
                                                <SelectBoxComponent
                                                    label={"男性"}
                                                    data={year}
                                                    name="year"
                                                    unit={"年"} />
                                                <SelectBoxComponent
                                                    label={"男性"}
                                                    data={month}
                                                    name="month"
                                                    unit={"月"} />
                                                <SelectBoxComponent
                                                    label={"男性"}
                                                    data={day}
                                                    name="day"
                                                    unit={"日"} />
                                            </div>
                                        </div>
                                        
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <InputFlexComponent
                                                    type={"text"}
                                                    label={"電話番号"}
                                                    placeholder={"電話番号は半角数字にしてください。"}
                                                    name={"phone"}
                                                    pattern = {new RegExp('^[0-9]{10,11}$')}
                                                    message = {"話番号は10桁か11桁の数値で入力してください。"}
                                                    required={false} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <InputFlexComponent
                                                    type={"email"}
                                                    label={"メールアドレス"}
                                                    placeholder={"メールアドレスを入力してください"}
                                                    name={"email"}
                                                    pattern = {new RegExp('^[\\w\\d._+-]+@[\\w\\d_-]+\\.[\\w\\d._-]+$')}
                                                    message = {"有効なメールアドレスを入力してください。"}
                                                    required={false} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12 d-flex">
                                                <LabelComponent label={"部署"} required={true} />
                                                <SelectBoxComponent
                                                    name={"room"}
                                                    data={roomList} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <InputFlexComponent
                                                    type={"text"}
                                                    label={"位置"}
                                                    placeholder={"その他位置を入力してください"}
                                                    name={"position"}
                                                    required={false} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-lg-12 d-flex date-of-birth">
                                                <LabelComponent label={"入社日"} required={true} />
                                                <SelectBoxComponent
                                                    label={"男性"}
                                                    data={year}
                                                    name="year"
                                                    unit={"年"} />
                                                <SelectBoxComponent
                                                    label={"男性"}
                                                    data={month}
                                                    name="month"
                                                    unit={"月"} />
                                                <SelectBoxComponent
                                                    label={"男性"}
                                                    data={day}
                                                    name="day"
                                                    unit={"日"} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <InputFlexComponent
                                                    type={"text"}
                                                    label={"郵便番号"}
                                                    placeholder={"その他郵便番号を入力してください"}
                                                    name={"zip_code"}
                                                    required={false} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <InputFlexComponent
                                                    type={"text"}
                                                    label={"住所１"}
                                                    placeholder={"その他住所１を入力してください"}
                                                    name={"address_1"}
                                                    required={false} />
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <InputFlexComponent
                                                    type={"text"}
                                                    label={"住所２"}
                                                    placeholder={"その他住所２を入力してください"}
                                                    name={"address_2"}
                                                    required={false} />
                                            </div>
                                        </div>
                                        
                                        <div className="row mb-3">
                                            <div className="col-lg-12">
                                                <TextAreaFlexComponent
                                                    label={"その他"}
                                                    placeholder={"その他を入力してください"}
                                                    name={"other"}
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
                                </div>
                            </form>
                        </FormProvider>
                    </div>
                </div>
            </div>
        </main>
    )
}