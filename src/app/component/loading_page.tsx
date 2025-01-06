'use client'

import { SkeletonUi } from "./loading.style";
import { TableView } from "./table_view.style";

const Loading = () => {

    return (
        <SkeletonUi>
            <table>
                <thead>
                    <tr>
                        <th colSpan={11}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="lcg_portrait">
                            <div className="skeleton_portrait" />
                        </td>
                        <td className="lcg_empty" colSpan={10}>
                            <div className="skeleton_content" />
                        </td>
                    </tr>
                    <tr>
                        <td className="lcg_portrait">
                            <div className="skeleton_portrait" />
                        </td>
                        <td className="lcg_empty" colSpan={10}>
                            <div className="skeleton_content" />
                        </td>
                    </tr>
                    <tr>
                        <td className="lcg_portrait">
                            <div className="skeleton_portrait" />
                        </td>
                        <td className="lcg_empty" colSpan={10}>
                            <div className="skeleton_content" />
                        </td>
                    </tr>
                    <tr>
                        <td className="lcg_portrait">
                            <div className="skeleton_portrait" />
                        </td>
                        <td className="lcg_empty" colSpan={10}>
                            <div className="skeleton_content" />
                        </td>
                    </tr>
                    <tr>
                        <td className="lcg_portrait">
                            <div className="skeleton_portrait" />
                        </td>
                        <td className="lcg_empty" colSpan={10}>
                            <div className="skeleton_content" />
                        </td>
                    </tr>
                </tbody>
            </table>
            <table>
                <thead>
                    <tr>
                        <th colSpan={11}></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="lcg_portrait">
                            <div className="skeleton_portrait" />
                        </td>
                        <td className="lcg_empty" colSpan={10}>
                            <div className="skeleton_content" />
                        </td>
                    </tr>
                    <tr>
                        <td className="lcg_portrait">
                            <div className="skeleton_portrait" />
                        </td>
                        <td className="lcg_empty" colSpan={10}>
                            <div className="skeleton_content" />
                        </td>
                    </tr>
                    <tr>
                        <td className="lcg_portrait">
                            <div className="skeleton_portrait" />
                        </td>
                        <td className="lcg_empty" colSpan={10}>
                            <div className="skeleton_content" />
                        </td>
                    </tr>
                    <tr>
                        <td className="lcg_portrait">
                            <div className="skeleton_portrait" />
                        </td>
                        <td className="lcg_empty" colSpan={10}>
                            <div className="skeleton_content" />
                        </td>
                    </tr>
                    <tr>
                        <td className="lcg_portrait">
                            <div className="skeleton_portrait" />
                        </td>
                        <td className="lcg_empty" colSpan={10}>
                            <div className="skeleton_content" />
                        </td>
                    </tr>
                </tbody>
            </table>
        </SkeletonUi>
    )
}

export default Loading;