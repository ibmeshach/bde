import CategoryFilter from "@/components/shared/CategoryFilter";
import Collection from "@/components/shared/Collection";
import Search from "@/components/shared/Search";
import { Button } from "@/components/ui/button";
import { getAllEvents } from "@/lib/actions/event.actions";
import { SearchParamProps } from "@/types";
import { auth } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import DemoCarousel from "@/components/shared/DemoCarousel";

export default async function Home({ searchParams }: SearchParamProps) {
  const page = Number(searchParams?.page) || 1;
  const searchText = (searchParams?.query as string) || "";
  const category = (searchParams?.category as string) || "";
  const { userId, orgRole }: { userId: any; orgRole: any } = auth();

  const events = await getAllEvents({
    query: searchText,
    category,
    page,
    limit: 6,
  });

  return (
    <>
      <section className="bg-primary-50 bg-dotted-pattern bg-contain py-5 md:py-10">
        <div className="wrapper grid grid-cols-1 gap-5 md:grid-cols-2 2xl:gap-0">
          <div className="flex flex-col justify-center gap-8">
            <h1 className="h1-bold">BlackDiamond Entertainment</h1>
            <p className="p-regular-20 md:p-regular-24">
              Music festivals, concerts, and events in the greater Maine area.
            </p>
            <Button
              size="lg"
              asChild
              className="rounded-md hover:bg-[#00192F] hover:text-gray-100 w-full sm:w-fit"
            >
              <Link href="#events">Explore Now</Link>
            </Button>
          </div>

          {/* <Image
            src="/assets/images/bde.jpg"
            alt="hero"
            width={1000}
            height={1000}
            className="max-h-[70vh] rounded-lg object-contain object-center 2xl:max-h-[50vh]"
          /> */}
          <DemoCarousel />
        </div>
      </section>

      {/* <section className="bg-primary-50  bg-contain ">
      <DemoCarousel />
      </section>  */}

      <section
        id="events"
        className="wrapper my-8 flex flex-col gap-8 md:gap-12"
      >
        <h2 className="h2-bold">Explore Events</h2>

        <div className="flex w-full flex-col gap-5 md:flex-row">
          <Search />
          <CategoryFilter clerkId={userId} />
        </div>

        <Collection
          data={events.data?.data}
          emptyTitle="No Events Found"
          emptyStateSubtext="Come back later"
          collectionType="All_Events"
          limit={6}
          page={page}
          totalPages={events.data?.totalPages}
        />
      </section>
    </>
  );
}
