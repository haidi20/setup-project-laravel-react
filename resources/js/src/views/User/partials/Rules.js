const number    = { type: 'number' };
const email     = { type: 'email' };
const required  = { required: true };

const handleRePass = (rule, value, callback) => {
    callback();
}

const rules = {
    name: [required],
    password: [required],
    rePassword: [{validator: handleRePass}],
    age: [required, number],
    email: [required, email],
    address: [required],
}

export default rules;