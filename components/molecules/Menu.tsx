import { Fragment, useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Box, Collapse, List, Typography } from '@mui/material';
import * as Icons from 'iconsax-reactjs';
import type { SidebarItem, SidebarSection } from '@/types/menu';
import { constants } from '@/lib/constants';

const normalize = (p: string = '') => (p || '/').replace(/\/+$/g, '').toLowerCase() || '/';

const startsWithPath = (baseUrl: string | undefined, path: string) => {
  if (!baseUrl) return false;
  const base = normalize(baseUrl);
  const target = normalize(path);
  return target === base || target.startsWith(base + '/');
};

const Menu = () => {
  const [menu, setMenu] = useState<SidebarSection[]>([]);
  const [openIndexes, setOpenIndexes] = useState<Record<string, boolean>>({});

  const pathname = usePathname() || '/';

  const mainColor = constants.colors.mainColor;
  const textColor = constants.colors.textColor;

  const toogleCollapse = (key: string) => {
    setOpenIndexes((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  useEffect(() => {
    setMenu(constants.sidebarMenu);
  }, []);

  useEffect(() => {
    const nextOpen: Record<string, boolean> = {};
    menu.forEach((section, sIdx) => {
      section.children.forEach((child, cIdx) => {
        if (child.type === 'collapse') {
          const key = `section-${sIdx}-${cIdx}`;
          const anyGrandActive = (child.children || []).some((g) =>
            startsWithPath(g.url, pathname)
          );
          const childActive = startsWithPath(child.url as any, pathname);
          nextOpen[key] = anyGrandActive || childActive || false;
        }
      });
    });
    if (Object.keys(nextOpen).length) setOpenIndexes((prev) => ({ ...prev, ...nextOpen }));
  }, [menu, pathname]);

  const renderChildren = (children: SidebarItem[], parentKey: string) =>
    children.map((child, index) => {
      const Icon = child.icon
        ? (Icons as Record<string, React.ElementType>)[child.icon] || undefined
        : undefined;

      if (child.type === 'collapse') {
        const key = `${parentKey}-${index}`;

        const isChildActive =
          startsWithPath((child as any).ur, pathname) ||
          (child.children || []).some((g) => startsWithPath(g.url, pathname));

        const baseColor = isChildActive ? mainColor : textColor;

        return (
          <Fragment key={key}>
            <Box
              onClick={() => toogleCollapse(key)}
              sx={{
                alignItems: 'center',
                backgroundColor: 'transparent',
                border: 0,
                borderRadius: '8px',
                boxSizing: 'border-box',
                color: baseColor,
                cursor: 'pointer',
                display: 'flex',
                justifyContent: 'flex-start',
                margin: '4px 10px',
                minWidth: '0',
                padding: '8px 16px 8px 20px',
                position: 'relative',
                textAlign: 'left',
                textDecoration: 'none',
                verticalAlign: 'middle',
              }}
              aria-current={isChildActive ? 'page' : undefined}
            >
              {Icon && (
                <Box
                  sx={{ color: baseColor, display: 'inline-flex', flexShrink: 0, minWidth: '38px' }}
                >
                  <Icon size="20" color={baseColor} variant="Bulk" />
                </Box>
              )}
              <Box sx={{ flex: '1 1 auto', minWidth: 0, mt: '4px', mb: '4px' }}>
                <Typography variant="h6" sx={{ fontSize: '0.875rem', color: baseColor }}>
                  {child.title}
                </Typography>
              </Box>
              <Box
                component="button"
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxSizing: 'border-box',
                  backgroundColor: 'transparent',
                  outline: 0,
                  m: 0,
                  cursor: 'pointer',
                  verticalAlign: 'middle',
                  textDecoration: 'none',
                  textAlign: 'center',
                  flex: '0 0 auto',
                  overflow: 'visible',
                  borderRadius: '8px',
                  fontSize: '1rem',
                  position: 'relative',
                  border: '1px solid',
                  width: '20px',
                  height: '20px',
                  marginRight: '-5px !important',
                  p: '2px',
                  color: textColor,
                  borderColor: '#DBE0E5',
                  transition: 'background-color 150ms cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    stroke={baseColor}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit="10"
                    strokeWidth="1.5"
                    d="M19.92 15.05L13.4 8.53c-.77-.77-2.03-.77-2.8 0l-6.52 6.52"
                  />
                </svg>
              </Box>
            </Box>

            <Collapse in={!!openIndexes[key]} timeout="auto" unmountOnExit>
              {child.children?.map((grandChild, subIndex) => {
                const isGrandActive = startsWithPath(grandChild.url, pathname);
                const itemColor = isGrandActive ? mainColor : textColor;

                return (
                  <Box key={`${key}-child-${subIndex}`}>
                    <a
                      target="_self"
                      href={grandChild.url}
                      style={{
                        alignItems: 'center',
                        backgroundColor: 'transparent',
                        border: 0,
                        borderRadius: '8px',
                        boxSizing: 'border-box',
                        color: itemColor,
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'flex-start',
                        margin: '2px 10px',
                        minWidth: '0',
                        padding: '8px 16px 8px 28px',
                        position: 'relative',
                        textAlign: 'left',
                        textDecoration: 'none',
                        verticalAlign: 'middle',
                      }}
                    >
                      <Box
                        sx={{
                          color: itemColor,
                          display: 'inline-flex',
                          flexShrink: 0,
                          minWidth: '38px',
                        }}
                      >
                        <span
                          style={{
                            backgroundColor: itemColor,
                            borderRadius: '50%',
                            display: 'inline-block',
                            width: 6,
                            height: 6,
                          }}
                        ></span>
                      </Box>
                      <Box sx={{ flex: '1 1 auto', minWidth: 0 }}>
                        <Typography variant="h6" sx={{ fontSize: '0.875rem', color: itemColor }}>
                          {grandChild.title}
                        </Typography>
                      </Box>
                    </a>
                  </Box>
                );
              })}
            </Collapse>
          </Fragment>
        );
      }

      const isTopActive = startsWithPath(child.url as any, pathname);
      const topColor = isTopActive ? mainColor : textColor;

      return (
        <Box key={`${parentKey}-item-${index}`}>
          <a
            target="_self"
            href={child.url}
            style={{
              alignItems: 'center',
              backgroundColor: 'transparent',
              border: 0,
              borderRadius: '8px',
              boxSizing: 'border-box',
              color: topColor,
              cursor: 'pointer',
              display: 'flex',
              justifyContent: 'flex-start',
              margin: '4px 10px',
              minWidth: '0',
              padding: '8px 16px 8px 20px',
              position: 'relative',
              textAlign: 'left',
              textDecoration: 'none',
              verticalAlign: 'middle',
            }}
          >
            {Icon && (
              <Box
                sx={{ color: topColor, display: 'inline-flex', flexShrink: 0, minWidth: '38px' }}
              >
                <Icon size="20" color={topColor} variant="Bulk" />
              </Box>
            )}
            <Box sx={{ flex: '1 1 auto', mb: '4px', mt: '4px', minWidth: 0 }}>
              <Typography variant="h6" sx={{ fontSize: '0.875rem', color: topColor }}>
                {child.title}
              </Typography>
            </Box>
          </a>
        </Box>
      );
    });

  return (
    <>
      <List sx={{ pt: '16px', width: '280px' }} component="div">
        {menu.map((section, index) => (
          <Box key={`section-${index}`} sx={{ mt: '12px', zIndex: 0 }}>
            <Box sx={{ mb: 1.5, pl: 3 }}>
              <Typography
                variant="h5"
                color={textColor}
                sx={{ fontSize: '0.688rem', fontWeight: 'bold', textTransform: 'uppercase' }}
              >
                {section.title}
              </Typography>
            </Box>
            {renderChildren(section.children, `section-${index}`)}
          </Box>
        ))}
      </List>
    </>
  );
};

export default Menu;
