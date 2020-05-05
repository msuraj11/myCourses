import Registration from '../../components/Registration';
import React from 'react';
import { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';

configure({adapter: new Adapter() });

const responseObj = {"status":"success","message":"Registered Successfully!!"};

Registration.handleSubmit = jest.fn(() => Promise.resolve(responseObj));

describe('When Registration component is given', () => {
    let wrapper;
  
    beforeEach(() => {
      wrapper = shallow(<Registration />);
    });
  
  
    it('should render', () => {
      expect(wrapper).toHaveLength(1);
    });
  
    it('should render form', () => {
      expect(wrapper.find('form')).toHaveLength(1);
    });
  
    it('should render name field', () => {
      expect(wrapper.find('#username')).toHaveLength(1);
    });
    
    it('should render sapid field', () => {
      expect(wrapper.find('#sapid')).toHaveLength(1);
    });

    it('should render email field', () => {
      expect(wrapper.find('#emailid')).toHaveLength(1);
    });

    it('should render primary skill field', () => {
      expect(wrapper.find('#primarySkill')).toHaveLength(1);
    });

    it('should render band field', () => {
      expect(wrapper.find('#band')).toHaveLength(1);
    });

    it('should render password field', () => {
      expect(wrapper.find('#pswd')).toHaveLength(1);
    });
  
    it('should render button field', () => {
      expect(wrapper.find('#btn')).toHaveLength(1);  //returns output length 1
    });

    it('should render button field', () => {
      expect(wrapper.find('button')).toHaveLength(2);   //returns output length 2
    });

    describe('When onChange event is not triggered on Name field', () => {
      it('should have empty state', () => {
        expect(wrapper.state().regdata.name).toEqual('');
      });
    });

    describe('When onChange event is not triggered on E-Mail field', () => {
      it('should have empty state', () => {
        expect(wrapper.state().regdata.emailId).toEqual('');
      });
    });

    describe('When onChange event is not triggered on Sap-ID field', () => {
      it('should have empty state', () => {
        expect(wrapper.state().regdata.sapId).toEqual('');
      });
    });

    describe('When onChange event is not triggered on Primary skill field', () => {
      it('should have empty state', () => {
        expect(wrapper.state().regdata.primarySkill).toEqual('');
      });
    });

    describe('When onChange event is not triggered on Band field', () => {
      it('should have empty state', () => {
        expect(wrapper.state().regdata.band).toEqual('');
      });
    });

    describe('When onChange event is not triggered on password field', () => {
      it('should have empty state', () => {
        expect(wrapper.state().regdata.password).toEqual('');
      });
    });
    
    describe('When onChange event triggered on userName field', () => {
      beforeEach(() => {
        
        wrapper.find('#username').simulate('change', { target: { value: 'Suraj Pawar', name:'name' } });
      })
      it('should have update the state', () => {
        expect(wrapper.state().regdata.name).toEqual('Suraj Pawar');
      })
    });

    describe('When onChange event triggered on sapId field', () => {
      beforeEach(() => {
        
        wrapper.find('#sapid').simulate('change', { target: { value: '51746084', name:'sapId' } });
      })
      it('should have update the state', () => {
        expect(wrapper.state().regdata.sapId).toEqual('51746084');
      })
    });

    describe('When onChange event triggered on E-Mail field', () => {
      beforeEach(() => {
        
        wrapper.find('#emailid').simulate('change', { target: { value: 'suraj.p@hcl.com', name:'emailId' } });
      })
      it('should have update the state', () => {
        expect(wrapper.state().regdata.emailId).toEqual('suraj.p@hcl.com');
      })
    });

    describe('When onChange event triggered on Primary Skill field', () => {
      beforeEach(() => {
        
        wrapper.find('#primarySkill').simulate('change', { target: { value: 'java', name:'primarySkill' } });
      })
      it('should have update the state', () => {
        expect(wrapper.state().regdata.primarySkill).toEqual('java');
      })
    });

    describe('When onChange event triggered on band field', () => {
      beforeEach(() => {
        
        wrapper.find('#band').simulate('change', { target: { value: 'E0', name:'band' } });
      })
      it('should have update the state', () => {
        expect(wrapper.state().regdata.band).toEqual('E0');
      })
    });

    describe('When onChange event triggered on password field', () => {
      beforeEach(() => {
        
        wrapper.find('#pswd').simulate('change', { target: { value: '1234', name:'password' } });
      })
      it('should have update the state', () => {
        expect(wrapper.state().regdata.password).toEqual('1234');
      })
    });

    describe('When submit button is clicked', () => {
      // let submission;
      // submission = jest.spyOn(Registration.prototype, 'handleSubmit');
      beforeEach(() => {
        wrapper.find('#username').simulate('change', { target: { value: 'Suraj Pawar', name: 'name' } });
        wrapper.find('#sapid').simulate('change', { target: { value: '51746084', name: 'sapId' } });
        wrapper.find('#emailid').simulate('change', { target: { value: 'suraj.p@hcl.com', name: 'emailId' } });
        wrapper.find('#primarySkill').simulate('change', { target: { value: 'java', name: 'primarySkill' } });
        wrapper.find('#band').simulate('change', { target: { value: 'E0', name: 'band' } });
        wrapper.find('#pswd').simulate('change', { target: { value: '1234', name: 'password' } });
        
        
        // const fakeEvent = { preventDefault: () => console.log('preventDefault') };
        
        // wrapper.find('form').simulate('submit', fakeEvent);
        //wrapper.find('form').simulate('submit', submission);
      });

      // afterEach(() => {
      //   submission.mockClear();
      // });
  
      it('should have excepted userName', () => {
        expect(wrapper.state().regdata.name).toEqual('Suraj Pawar');
      });
  
      it('should have excepted sapid', () => {
        expect(wrapper.state().regdata.sapId).toEqual('51746084');
      });

      it('should have excepted E-Mail', () => {
        expect(wrapper.state().regdata.emailId).toEqual('suraj.p@hcl.com');
      });

      it('should have excepted Primary Skill', () => {
        expect(wrapper.state().regdata.primarySkill).toEqual('java');
      });

      it('should have excepted band', () => {
        expect(wrapper.state().regdata.band).toEqual('E0');
      });

      it('should have excepted password', () => {
        expect(wrapper.state().regdata.password).toEqual('1234');
      });

    //   it('should have called "handleSubmit()" ', () => {
    //     expect(submission).toHaveBeenCalledTimes(1);
    // });

    });
    
});

describe('When submit button is cliked', () => {
    it('should have called handleSubmit function', () => {
    const comp = shallow(<Registration />);
    const spy = jest.spyOn(comp.instance(), 'handleSubmit');

    comp.instance().forceUpdate();
    const fakeEvent = { preventDefault: () => console.log('preventDefault') };
    comp.find('form').simulate('submit', fakeEvent);

    expect(spy).toHaveBeenCalled();

  });

});




describe('When submit is clicked', () => {
    let submitSpy;
    let wrapper;
    beforeEach(() => {
      wrapper = mount(<Registration />);
      submitSpy = jest.spyOn(wrapper.instance(), 'handleSubmit');

    });

    it('should have called expected methods', async () => {
      const returnVal = await Registration.handleSubmit();
      expect(returnVal).toBe(responseObj);
      expect(submitSpy).toHaveBeenCalled();
      //expect(Registration.handleSubmit).toHaveBeenCalled();

      });

 
    it('should call handleSubmit with resolves', () => {
      expect.assertions(1);
      return expect(Registration.handleSubmit()).resolves.toEqual(responseObj);

    });

  });



