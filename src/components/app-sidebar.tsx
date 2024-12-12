import {
  Compass,
  Download,
  FolderMinus,
  Heart,
  Home,
  LibraryBig,
} from "lucide-react";
import Image from "next/image";
import Logo from "../../public/Group 39511.png";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Discover",
    url: "#",
    icon: Compass,
  },
  {
    title: "Collections",
    url: "#",
    icon: LibraryBig,
  },
];
const items1 = [
  {
    title: "Downloads",
    url: "#",
    icon: Download,
  },
  {
    title: "Favourites",
    url: "#",
    icon: Heart,
  },
  {
    title: "Local Files",
    url: "#",
    icon: FolderMinus,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <div className="py-3 px-3">
          <Image src={Logo} alt="Logo" height={30} width={30} />
        </div>
        <SidebarGroup>
          <SidebarGroupLabel>Features</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup>
          <SidebarGroupLabel>Library</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items1.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
