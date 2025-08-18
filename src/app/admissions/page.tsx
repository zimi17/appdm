
"use client";

import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { SiteHeader } from "@/components/universal/site-header";
import { SiteFooter } from "@/components/universal/site-footer";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage, FormDescription } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useToast } from "@/hooks/use-toast";
import { admissionFormSchema, ugPrograms, ugYears, industries } from "@/lib/data/forms";


function SectionHeader({ title }: { title: string }) {
    return <h2 className="text-2xl font-bold text-foreground mt-8 border-b pb-2 mb-6">{title}</h2>
}

export default function AdmissionsPage() {
    const { toast } = useToast()
    const form = useForm<z.infer<typeof admissionFormSchema>>({
        resolver: zodResolver(admissionFormSchema),
        defaultValues: {
            email: "",
            firstName: "",
            lastName: "",
            phone: "+62",
            city: "",
            postalCode: "",
            country: "ID",
            ugProgram: "",
            ugYear: "",
            industry: "",
        },
    });

    function onSubmit(data: z.infer<typeof admissionFormSchema>) {
        toast({
            title: "Pendaftaran Terkirim!",
            description: "Terima kasih telah mendaftar. Kami akan segera menghubungi Anda.",
        })
        console.log(data)
    }

    return (
        <div className="flex flex-col min-h-screen bg-background">
            <SiteHeader />
            <main id="main-content" className="flex-grow">
                <div className="container mx-auto px-4 py-16 max-w-4xl">
                    <h1 className="text-5xl md:text-6xl font-headline font-bold text-center mb-4">Penerimaan Mahasiswa Baru</h1>
                    <p className="text-center text-muted-foreground text-lg mb-12">
                        Ambil langkah pertama untuk bergabung dengan komunitas kami yang inspiratif dan kolaboratif. Informasi yang Anda berikan membantu kami menyesuaikan komunikasi kami dengan minat spesifik Anda.
                    </p>

                    <FormProvider {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                            <SectionHeader title="Tentang Anda" />
                            <p className="text-muted-foreground -mt-4">Informasi ini akan digunakan untuk membuat profil Anda di sistem kami. Ini tidak akan digunakan untuk tujuan evaluasi.</p>

                            <div className="grid md:grid-cols-2 gap-8">
                                <FormField name="firstName" render={({ field }) => (
                                    <FormItem><FormLabel>Nama Depan*</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                                <FormField name="lastName" render={({ field }) => (
                                    <FormItem><FormLabel>Nama Belakang*</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                            </div>
                            <FormField name="dob" render={({ field }) => (
                                <FormItem className="flex flex-col"><FormLabel>Tanggal Lahir*</FormLabel>
                                <Popover>
                                    <PopoverTrigger asChild>
                                        <FormControl>
                                            <Button variant={"outline"} className={cn("w-[240px] pl-3 text-left font-normal", !field.value && "text-muted-foreground")}>
                                                {field.value ? (format(field.value, "PPP")) : (<span>Pilih tanggal</span>)}
                                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                                            </Button>
                                        </FormControl>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar mode="single" selected={field.value} onSelect={field.onChange} disabled={(date) => date > new Date() || date < new Date("1900-01-01")} initialFocus />
                                    </PopoverContent>
                                </Popover>
                                <FormDescription>Ini membantu kami menjaga keamanan data Anda.</FormDescription>
                                <FormMessage />
                                </FormItem>
                            )} />

                            <FormField name="email" render={({ field }) => (
                                <FormItem><FormLabel>Alamat Email*</FormLabel><FormControl><Input type="email" {...field} /></FormControl><FormMessage /></FormItem>
                            )} />

                            <FormField name="phone" render={({ field }) => (
                                <FormItem><FormLabel>Nomor Ponsel</FormLabel><FormControl><Input type="tel" {...field} /></FormControl>
                                <FormDescription>Dengan mengisi nomor ponsel, Anda setuju untuk menerima informasi penting melalui SMS/WA.</FormDescription>
                                <FormMessage /></FormItem>
                            )} />

                            <div className="grid md:grid-cols-2 gap-8">
                                <FormField name="country" render={({ field }) => (
                                    <FormItem>
                                    <FormLabel>Negara</FormLabel>
                                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                                        <FormControl><SelectTrigger><SelectValue placeholder="Pilih Negara" /></SelectTrigger></FormControl>
                                        <SelectContent><SelectItem value="ID">Indonesia</SelectItem><SelectItem value="US">United States</SelectItem></SelectContent>
                                    </Select>
                                    <FormMessage />
                                    </FormItem>
                                )} />
                               <FormField name="city" render={({ field }) => (
                                    <FormItem><FormLabel>Kota</FormLabel><FormControl><Input {...field} /></FormControl><FormMessage /></FormItem>
                                )} />
                            </div>

                             <SectionHeader title="Latar Belakang Pendidikan & Karir" />
                             <p className="text-muted-foreground -mt-4">Informasi ini membantu kami menyesuaikan komunikasi kami dengan latar belakang Anda.</p>

                            <FormField name="firstGen" render={({ field }) => (
                                <FormItem className="space-y-3">
                                <FormLabel>Apakah Anda mahasiswa generasi pertama?*</FormLabel>
                                <FormDescription>
                                    (Jika tidak ada orang tua/wali Anda yang lulus dari perguruan tinggi dengan gelar sarjana atau setara, harap pilih ya.)
                                </FormDescription>
                                <FormControl>
                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className="flex flex-col space-y-1">
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="yes" /></FormControl><FormLabel className="font-normal">Ya</FormLabel></FormItem>
                                    <FormItem className="flex items-center space-x-3 space-y-0"><FormControl><RadioGroupItem value="no" /></FormControl><FormLabel className="font-normal">Tidak</FormLabel></FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )} />
                            
                            <FormField name="ugProgram" render={({ field }) => (
                                <FormItem><FormLabel>Program Studi Sarjana Utama</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl><SelectTrigger><SelectValue placeholder="Pilih program studi..." /></SelectTrigger></FormControl>
                                    <SelectContent>
                                        {ugPrograms.map(program => <SelectItem key={program} value={program}>{program}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )} />

                            <FormField name="ugYear" render={({ field }) => (
                                <FormItem><FormLabel>Tahun Lulus Program Sarjana (atau setara)*</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl><SelectTrigger><SelectValue placeholder="Pilih tahun..." /></SelectTrigger></FormControl>
                                    <SelectContent>
                                        {ugYears.map(year => <SelectItem key={year} value={year.toString()}>{year}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )} />

                            <FormField name="industry" render={({ field }) => (
                                <FormItem><FormLabel>Industri Tempat Bekerja Saat Ini*</FormLabel>
                                <Select onValueChange={field.onChange} defaultValue={field.value}>
                                    <FormControl><SelectTrigger><SelectValue placeholder="Pilih industri..." /></SelectTrigger></FormControl>
                                    <SelectContent>
                                        {industries.map(industry => <SelectItem key={industry} value={industry}>{industry}</SelectItem>)}
                                    </SelectContent>
                                </Select>
                                <FormMessage />
                                </FormItem>
                            )} />

                            <div className="flex items-center space-x-2 pt-8">
                                <Checkbox id="terms" required />
                                <label htmlFor="terms" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Saya setuju dengan <a href="#" className="underline">syarat dan ketentuan</a>
                                </label>
                            </div>

                            <p className="text-sm text-muted-foreground">Harap dicatat bahwa mengirimkan formulir ini tidak memulai aplikasi ke STIE Dwimulya.</p>
                            
                            <Button type="submit" size="lg" className="rounded-full px-8 py-6 text-lg bg-secondary hover:bg-accent">Kirim Pendaftaran</Button>
                        </form>
                    </FormProvider>
                </div>
            </main>
            <SiteFooter />
        </div>
    )
}
