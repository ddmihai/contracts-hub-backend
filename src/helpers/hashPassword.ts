import bcryptjs from 'bcryptjs';

const hashPassword = async (plainPassword: string) => {
    if (plainPassword.trim().length < 8) {
        throw new Error('Invalid password. You need at least 8 characters long');
    }

    else {
        const hash = await bcryptjs.hash(plainPassword, 10);
        return hash;
    }
}

export default hashPassword;