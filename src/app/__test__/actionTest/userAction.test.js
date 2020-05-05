import * as actionTypes from '../../actions/actionTypes';
import * as userAction from '../../actions/userAction';
import * as apis from '../../api/userActionApi';
import React from 'react';
//import { shallow, mount } from 'enzyme';

// const responseObj = {"status":"success","message":"Valid User"}

// apis.loginUsers = jest.fn(()=> Promise.resolve(responseObj));

describe('When a login action is performed', ()=>{

    describe('type and responses of action object', ()=>{

            it('should be displaying success scenario', ()=>{

                        let response = { status: 'success'};
                        let actionObj = {type: actionTypes.LOGIN_USER,response };
                        let responses =userAction.loginSuccess(response);

                        expect(responses).toEqual(actionObj);

            });

    }); 



    describe('type and responses of action object', ()=>{

            it('should be displaying failure scenario', ()=>{

                        let err = {status: 'err'};
                        let actionObj = {type: actionTypes.LOGIN_USER,err };
                        let responses =userAction.loginFailure(err);

                        expect(responses).toEqual(actionObj);

            });

    }); 

});


// describe('When loginUser() in actions is called', () => {
//         let loginUserSpy;
//         //let wrapper;
//         beforeEach(() => {
//                 loginUserSpy = jest.spyOn(userAction.prototype, 'loginUser');
//         });
    
        // afterEach(() => {
        //         loginUserSpy.mockClear();
        // });
        
        // it('should NOT render the component', () => {
        //     expect(wrapper).not.toBeDefined();
        // });
    
        // it('should NOT have called "ComponentDidMount()" ', () => {
        //     expect(didMountSpy).toHaveBeenCalledTimes(0);
        // });
    
        // describe('When render() is called', () => {
        //     beforeEach(() => {
        //         wrapper = mount(<Ajax />);
        //     });
    
        //     it('should render the component', () => {
        //         expect(wrapper).toHaveLength(1);
        //     });
    
        //     it('should have called "ComponentDidMount()" ', () => {
        //         expect(didMountSpy).toHaveBeenCalledTimes(1);
        //     });
    
        //     it('should have called "getData()"', () => {
        //         expect(apis.getData).toHaveBeenCalled();
        //     });
        // });


        // it('shoud have called expected methods', async () => {
        //         const returnValue = await apis.loginUsers();
        //         expect(returnValue).toBe(responseObj);
        //         expect(loginUserSpy).toHaveBeenCalled();
        //         expect(apis.loginUsers).toHaveBeenCalled();        
        //     });
        
        //     it('should call loginUsers with resolves', () => {
        //         expect.assertions(1);
        //         return expect(apis.loginUsers()).resolves.toEqual(responseObj);
        //       });
//     });