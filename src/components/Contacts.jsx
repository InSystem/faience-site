import React from 'react'
import { Form, Input, TextArea, Button } from 'semantic-ui-react'
import './css/contacts.css'

const Contacts = () => (
    <div className="contacts">
        <div className="contacts_form">
            <p>Вы можете связаться со мной через форму обратной связи</p>
            <Form className="form">
                <Form.Group widths='equal'>
                    <Form.Field id='form-input-control-first-name'
                                control={Input}
                                label='Имя'
                                placeholder='Имя' />
                    <Form.Input id='form-input-control-email'
                                label='Email'
                                placeholder='mail@mail.ru' />
                </Form.Group>
                <Form.Field id='form-textarea-control-opinion'
                            control={TextArea}
                            rows="9"
                            label='Сообщение'
                            placeholder='Сообщение' />
                <Form.Field id='form-button-control-public'
                            control={Button}
                            content='Отправить'
                            size='tiny'
                            color='black'/>
            </Form>
        </div>
        <div className="contacts_other">
            <p className="masters-market">
                <strong>
                    Мой магазин на &nbsp;
                    <a href="https://www.livemaster.ru/faience-faience?view=profile" target="_blank" rel="noopener noreferrer">
                        Ярмарке мастеров
                    </a>
                </strong>
            </p>
            <p><a className="mail" href="mailto:shchukina.faience@gmail.com">shchukina.faience@gmail.com</a><br/>
                +7 904 358 15 59
            </p>
        </div>
    </div>
);

export default Contacts