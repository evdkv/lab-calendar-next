import { useSession } from "next-auth/react";
import { SignInButton } from "./accountbtns";


export const CalendarTable = () => {
    return (
        <>
        <div className="flex flex-row justify-start items-center">
            <table className="table-fixed">
                <thead>
                    <tr>
                        <th className="w-[40px]"></th>
                        <th>MONDAY</th>
                        <th>TUESDAY</th>
                        <th>WEDNESDAY</th>
                        <th>THURSDAY</th>
                        <th>FRIDAY</th>
                        <th>SATURDAY</th>
                        <th>SUNDAY</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="min-h-[0px] max-h-[0px] h-[0px]">
                        <td className="max-height: 0px;min-height: 0px;height: 0px;padding: 0px;"></td>
                        <td id="mon" rowSpan={24} className="w-[150px] min-w-[150px] max-w-[150px] h-[160px] max-h-[160px] p-0 border-solid"></td>
                        <td id="tue" rowSpan={24} className="w-[150px] min-w-[150px] max-w-[150px] h-[160px] max-h-[160px] p-0 border-solid"></td>
                        <td id="wed" rowSpan={24} className="w-[150px] min-w-[150px] max-w-[150px] h-[160px] max-h-[160px] p-0 border-solid"></td>
                        <td id="thu" rowSpan={24} className="w-[150px] min-w-[150px] max-w-[150px] h-[160px] max-h-[160px] p-0 border-solid"></td>
                        <td id="fri" rowSpan={24} className="w-[150px] min-w-[150px] max-w-[150px] h-[160px] max-h-[160px] p-0 border-solid"></td>
                        <td id="sat" rowSpan={24} className="w-[150px] min-w-[150px] max-w-[150px] h-[160px] max-h-[160px] p-0 border-solid"></td>
                        <td id="sun" rowSpan={24} className="w-[150px] min-w-[150px] max-w-[150px] h-[160px] max-h-[160px] p-0 border-solid"></td>
                    </tr>
                    <tr className="max-h-[35px] min-h-[35px] h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">9:00</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">9:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8}className="max-h-[35px] min-h-[35px]">10:00</td>
                    </tr>
                    <tr className="min-height: 35px;height: 35px;max-height: 35px;">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">10:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">11:00</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">11:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">12:00</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">12:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">1:00</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">1:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">2:00</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">2:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">3:00</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">3:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">4:00</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">4:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">5:00</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">5:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">6:00</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">6:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">7:00</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">7:30</td>
                    </tr>
                    <tr className="h-[35px] min-h-[35px] max-h-[35px]">
                        <td colSpan={8} className="max-h-[35px] min-h-[35px]">8:00</td>
                    </tr>
                </tbody>
            </table>
        </div>
        </>
    );
};

export const Calendar = () => {
    const { data: session, status } = useSession();

    if (status === "authenticated") {
        return <CalendarTable />;

    }

    return (
        <div className="flex flex-col justify-center items-center gap-4">
            <p className="text-2xl">Hey there! Please sign in to view your dashboard.</p>
            <SignInButton />
        </div>
    );

};