import { Input } from "../../components/Inputs/Input";
import Search from "../../components/Inputs/Search";
import Select from "../../components/Select/Select";
import { gender, nationalities } from "../../constant";
import useHome from "./useHome";

export default function Home() {
    const {
        handleSearch,
        handleSelect,
        users,
        isFetchingUsers,
        handleChange,
        ageRange,
        hasFilter
    } = useHome()
    const patt = "[0-9]+"

    return (
        <>
            <Search
                id="search"
                name="search"
                placeholder="Search by name"
                containerClass="mb-[24px]"
                onChange={handleSearch}
            />
            <div className="flex justify-center mb-[24px]">
                <Select title="Gender" containerClass="mr-[10px]" options={gender} onChange={handleSelect} />
                <Select title="Nationality" containerClass="mr-[10px]" options={nationalities} onChange={handleSelect} />
                <Input label="Min age" id="min" type="text" pattern={patt} name="min" value={ageRange.min} containerClass="w-[60px] mr-[10px]" onChange={handleChange} />
                <Input label="Max age" id="max" type="text" pattern={patt} name="max" value={ageRange.max} containerClass="w-[60px]" onChange={handleChange} />
            </div>
            <div className="px-[40px]">
                <table className="w-full">
                    <thead>
                        <tr>
                            <th className="text-lg text-start">Name</th>
                            <th className="text-lg text-start">Age</th>
                            <th className="text-lg text-start">Country</th>
                            <th className="text-lg text-start">Gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {!isFetchingUsers ?
                            users?.map((item) => (
                                <tr key={item.phone}>
                                    <td>{item?.name?.title}. {item?.name?.first} {item?.name?.last}</td>
                                    <td>{item?.dob?.age ?? "N/A"} </td>
                                    <td>{item?.location?.country ?? "N/A"} </td>
                                    <td>{item?.gender}</td>
                                </tr>
                            )) :
                            <tr>
                                <td colSpan={4} className="text-center py-[60px]">Loading...</td>
                            </tr>
                        }
                        {hasFilter && !users.length && <tr><td colSpan={4} className="text-center py-[60px]">Oops! There are no results for the keyword...</td></tr>}
                    </tbody>
                </table>
            </div>
        </>
    )
}