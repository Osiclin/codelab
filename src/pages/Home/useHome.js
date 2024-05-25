import { useMemo, useState } from "react"
import { useDebounce } from "../../hooks/useDebounce"
import { useGetUsersQuery } from "../../services/api/user"
import { useSearchParams } from "react-router-dom"
import { tryCatch } from "../../utils/tryCatch"

export default function useHome() {
    const [searchParams, setSearchParams] = useSearchParams()
    const searchValue = searchParams.get("search")
    const [ageRange, setAgeRange] = useState({ min: "", max: "" })
    const [selectedGender, setSelectedGender] = useState("")
    const [selectedNationality, setSelectedNationality] = useState("")
    const { debouncedValue: search } = useDebounce(searchValue)
    const { data = [], isFetching: isFetchingUsers } = useGetUsersQuery({ results: 100, nat: selectedNationality })

    function handleSearch(e) {
        setSearchParams({ search: e.target.value })
    }

    function searchByName(dataArray, name) {
        const transformedName = name.toLowerCase();

        const matchingUsers = dataArray.filter(user => {
            const firstName = user.name.first.toLowerCase();
            const lastName = user.name.last.toLowerCase();
            const fullName = `${firstName} ${lastName}`;

            // Check if full name, first name, or last name matches
            return fullName.includes(transformedName) ||
                firstName.includes(transformedName) ||
                lastName.includes(transformedName);
        });

        return matchingUsers;
    }

    function filterByGender(dataArray, gender) {
        if (!gender) return
        const transformedGender = gender.toLowerCase();
        const matchingUsers = dataArray.filter(user => user.gender.toLowerCase() === transformedGender);

        return matchingUsers;
    }

    const users = useMemo(() => {
        let result = data?.results || []

        tryCatch(() => {
            if (data?.results?.length) {
                const { min, max } = ageRange
                if (search) result = searchByName(result, search)
                if (selectedGender) result = filterByGender(result, selectedGender)
                if (selectedGender) result = filterByGender(result, selectedGender)
                if (min) result = result.filter(item => item.dob.age >= min)
                if (max) result = result.filter(item => item.dob.age <= max)
            }
        })

        return result
    }, [data, search, selectedGender, ageRange])

    function handleSelect(e) {
        const { name, value } = e.target
        name === "Gender" ?
            setSelectedGender(value) :
            setSelectedNationality(value)
    }

    function handleChange(e) {
        const { name, value, validity, key } = e.target
        if (!validity.valid && key !== "Backspace") return
        setAgeRange({ ...ageRange, [name]: value })
    }

    const hasFilter = search || ageRange.min || ageRange.max

    return {
        users,
        search,
        handleSearch,
        handleSelect,
        isFetchingUsers,
        handleChange,
        ageRange,
        hasFilter
    }
}