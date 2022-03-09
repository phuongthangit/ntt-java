import DatePickerComponent from "../../components/DatePicker/DatePicker";
import InputComponent from "../../components/Input/Input";
import InputFlexComponent from "../../components/Input/InputFlex";
import LabelComponent from "../../components/Label/LabelComponent";
import RadioButtonComponent from "../../components/RadioButton/RadioButton";
import SelectBoxComponent from "../../components/SelectBox/SelectBox";
import TextAreaFlexComponent from "../../components/TextArea/TextAreaFlex";
import { MdAttachFile, MdCloudUpload, MdEvent } from "react-icons/md";

import { useForm, FormProvider } from 'react-hook-form';
import { FormFeedback } from 'reactstrap';

export default function FormRegisterScreen() {

    const methods = useForm({
        mode: 'all',
        reValidateMode: 'all',
    });
    const { formState: { errors } } = methods;
    console.log(errors);

    const roomList = ['部署1', '部署2', '部署3'];
    const year = [2022, 2021, 2020, 2019, 2018];
    const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
    const day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    /**
     * preview image
     * @param {*} setState 
     */
    const _onUpload = () => {
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = () => {
            let files = Array.from(input.files);
            let reader = new FileReader();
            reader.readAsDataURL(files[0]);

            reader.onloadend = function (e) {

            }
        }
        input.click();
    }

    return (
        <main className="warp form-register">
            <div className="mb-4">
                <div className="card mt-4">
                    <div className="card-header">
                        <div className="row">
                            <div className="col-8">
                                <h4 className="card-title">応募者登録フォーム</h4>
                            </div>
                            <div className="col-4 d-flex">
                                <h4 className="card-title">関連資料</h4>
                                <MdCloudUpload className="mx-3 upload-icon" />
                            </div>
                        </div>
                    </div>
                    <div className="card-body">
                        <FormProvider {...methods}>
                            <form action="">
                                <div className="row">
                                    <div className="col-lg-8 col-md-12 col-left">
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
                                        <hr />
                                        <div className="row">
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
                                        <hr />
                                        <div className="row">
                                            <div className="col-lg-12 d-flex date-of-birth">
                                                <LabelComponent label={"生年月日"} required={true} />
                                                <SelectBoxComponent
                                                    label={"男性"}
                                                    data={year}
                                                    name="year" />
                                                <SelectBoxComponent
                                                    label={"男性"}
                                                    data={month}
                                                    name="month" />
                                                <SelectBoxComponent
                                                    label={"男性"}
                                                    data={day}
                                                    name="day" />
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row mb-3">
                                            <div className="col-12">
                                                <InputFlexComponent
                                                    type={"text"}
                                                    label={"電話番号"}
                                                    placeholder={"電話番号は半角数字にしてください。"}
                                                    name={"phone"}
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
                                            <div className="col-lg-12 d-flex position-relative">
                                                <LabelComponent label={"入社日"} required={true} />
                                                <DatePickerComponent
                                                    required={true}
                                                    placeholder={'入社日を入力してください'}
                                                    name={"application_date"}
                                                    label={"入社日"} />
                                                <MdEvent className="icon-date" />
                                                {errors.application_date && (
                                                    <FormFeedback className="d-block" style={{ paddingLeft: '200px' }}>{errors.application_date.message}</FormFeedback>
                                                )}
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
                                        <hr />
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
                                    <div className="col-lg-4 col-md-12 col-right mb-5">
                                        <div className="card">
                                            <div className="card-body">
                                                <div className="row mb-3">
                                                    <div className="col-lg-12">
                                                        <LabelComponent label={"資料追加 "} />
                                                    </div>
                                                    <div className="col-lg-12 mb-3">
                                                        <InputComponent
                                                            type={"text"}
                                                            placeholder={"簡単な説明"}
                                                            name={"file-title"}
                                                            required={false} />
                                                    </div>
                                                    <div className="col-lg-12 position-relative">
                                                        <div onClick={_onUpload} className="form-upload form-control d-flex justify-content-between">アップロードするファイルを選択してください<MdAttachFile className="upload-file-icon" /></div>

                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div onClick={_onUpload} className="col-12 d-flex justify-content-end">
                                                        <button type="button" className="btn btn-primary btn-sm mb-3 mt-3">アップロード</button>
                                                    </div>
                                                </div>
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