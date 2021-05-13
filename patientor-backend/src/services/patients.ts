import patients from "../../data/patients.json";
import { NonSensitivePatient } from '../types/Patient';

const getPatients = (): NonSensitivePatient[] => {
    return patients.map(({ id, dateOfBirth, name, gender, occupation }) => ({
        id,
        dateOfBirth,
        name,
        gender,
        occupation,
    })
    );
};

export default {
    getPatients,
};