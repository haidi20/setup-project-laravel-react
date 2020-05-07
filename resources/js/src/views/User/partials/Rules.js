const number    = { type: 'number' };
const email     = { type: 'email' };
const required  = { required: true };

const rules = {
    name: [required],
    password: [required],
    age: [required, number],
    email: [required, email],
    address: [required],
}

export default rules;