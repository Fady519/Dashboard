"use client";
import React, { useState, useEffect } from "react";
import { Search, Phone, MapPin, Loader2, Users } from "lucide-react";

interface Contact {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    age: number;
    address: {
        city: string;
        address: string;
    };
    image: string;
}

export default function ContactsPage() {
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                setLoading(true);
                const res = await fetch("https://dummyjson.com/users?limit=30");
                const data = await res.json();
                setContacts(data.users);
            } catch (error) {
                console.error("Error fetching contacts:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchContacts();
    }, []);


    const filteredContacts = contacts.filter((contact) => {
        const fullName = `${contact.firstName} ${contact.lastName}`.toLowerCase();
        const query = searchQuery.toLowerCase();
        return (
            fullName.includes(query) ||
            contact.email.toLowerCase().includes(query) ||
            contact.phone.includes(query) ||
            contact.address.city.toLowerCase().includes(query)
        );
    });

    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50 tracking-tight">Contacts Information</h1>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    List of Contacts for Future Reference and CRM purposes.
                </p>
            </div>

           
            <div className="relative max-w-xs rounded-2xl border border-slate-200/80 bg-white p-2 shadow-sm dark:border-slate-800 dark:bg-slate-900">
                <Search className="absolute left-5 top-5 h-4 w-4 text-slate-400" />
                <input
                    type="text"
                    placeholder="Search contacts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="h-9 w-full rounded-xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm text-slate-900 outline-none transition-all focus:border-indigo-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-100 dark:focus:border-indigo-500"
                />
            </div>

            {loading ? (
                <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-slate-200/80 bg-white dark:border-slate-800 dark:bg-slate-900">
                    <Loader2 className="h-8 w-8 animate-spin text-indigo-600 dark:text-indigo-400" />
                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">Loading contacts...</p>
                </div>
            ) : (
                <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse text-left text-sm text-slate-500 dark:text-slate-400">
                            <thead className="bg-slate-50 font-medium text-slate-700 dark:bg-slate-800/50 dark:text-slate-300">
                                <tr>
                                    <th className="px-6 py-4">ID</th>
                                    <th className="px-6 py-4">Profile</th>
                                    <th className="px-6 py-4">Age</th>
                                    <th className="px-6 py-4">Phone Number</th>
                                    <th className="px-6 py-4">Email</th>
                                    <th className="px-6 py-4">Address</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-100 dark:divide-slate-800/60">
                                {filteredContacts.map((contact) => (
                                    <tr key={contact.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors">
                                        <td className="px-6 py-4 font-semibold text-indigo-600 dark:text-indigo-400">#{contact.id}</td>
                                        <td className="flex items-center gap-3 px-6 py-4 font-medium text-slate-900 dark:text-slate-100 whitespace-nowrap">
                                            <img className="h-9 w-9 rounded-full bg-slate-100 object-cover" src={contact.image} alt="" />
                                            <span>{contact.firstName} {contact.lastName}</span>
                                        </td>
                                        <td className="px-6 py-4">{contact.age}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="flex items-center gap-1"><Phone className="h-3 w-3 text-slate-400" /> {contact.phone}</span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap">{contact.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap">
                                            <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                                                <MapPin className="h-3 w-3 text-slate-400" /> {contact.address.city}, {contact.address.address}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
        </div>
    );
}